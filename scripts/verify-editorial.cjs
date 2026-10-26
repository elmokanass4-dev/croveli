const {chromium}=require('playwright'),assert=require('assert/strict'),fs=require('fs'),path=require('path');
const patterns=require('../src/patterns.json').filter(p=>p.editorial);
const base=process.env.CROVELI_TEST_URL||'http://localhost:4174/croveli/';
function expectedImages(p,blocks=p.editorial.blocks){return blocks.flatMap(b=>b.type==='image'?[b.image]:b.type==='gallery'?b.images:b.type==='columns'?b.columns.flatMap(c=>expectedImages(p,c)):b.type==='instructions'?[p.sections.find(s=>s.id===b.section).inlineImage].filter(Boolean):[]);}
(async()=>{
 const browser=await chromium.launch({channel:'msedge'}),page=await browser.newPage(),errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 for(const width of [320,390,768,1440]){
  await page.setViewportSize({width,height:1000});
  for(const p of patterns){
   await page.goto(base+'patterns/'+p.id+'/');
   assert.equal(await page.locator('.document-page,iframe,object,embed').count(),0);
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,p.id+' overflow '+width);
   assert.deepEqual(await page.locator('.editorial-photo img').evaluateAll(images=>images.map(i=>i.getAttribute('src').match(/assets\/(.*)-800\.webp/)[1])),expectedImages(p));
   await page.locator('.editorial-photo img').evaluateAll(images=>images.forEach(i=>i.loading='eager'));
   await page.evaluate(()=>Promise.all([...document.querySelectorAll('.editorial-photo img')].map(i=>i.decode())));
   assert.equal(await page.locator('.editorial-content').evaluate(el=>getComputedStyle(el).userSelect==='none'),false);
   const columns=await page.locator('.editorial-columns').evaluateAll(els=>els.map(el=>getComputedStyle(el).gridTemplateColumns.split(' ').length));
   assert(columns.every(n=>n===(width<=760?1:2)));
   for(const s of p.sections){const texts=await page.locator('#component-'+s.id).locator('..').locator('.round-text').allTextContents();assert.deepEqual(texts,s.rows.map(r=>r[1]));}
   await page.getByRole('link',{name:'Jump to instructions',exact:true}).click();assert(page.url().endsWith('#instructions'));
   await page.locator('[data-round]').first().setChecked(true);await page.reload();assert(await page.locator('[data-round]').first().isChecked());
   await page.locator('#reading-size').selectOption('22');assert.equal(await page.locator('.round-text').first().evaluate(el=>getComputedStyle(el).fontSize),'22px');
   await page.locator('#reading-size').selectOption('18');
   if(width===390||width===1440){await page.evaluate(()=>window.scrollTo(0,0));await page.screenshot({path:path.resolve(__dirname,'../../croveli-'+p.id+'-html-'+width+'.png')});}
  }
 }
 const nojs=await browser.newContext({javaScriptEnabled:false}),plain=await nojs.newPage();
 for(const p of patterns){await plain.goto(base+'patterns/'+p.id+'/');assert.equal(await plain.locator('.editorial-photo img').count(),expectedImages(p).length);assert.equal(await plain.locator('[data-round]').count(),p.sections.reduce((n,s)=>n+s.rows.length,0));assert(await plain.locator('.editorial-source-note').innerText());}
 assert.deepEqual(errors,[]);await browser.close();console.log(JSON.stringify({result:'PASS',patterns:patterns.length,widths:[320,390,768,1440],checks:['native HTML without PDF pages','individual source images in order','source instruction text','responsive columns','image decoding','jump link','saved progress','reading size','no-JS content','no overflow or browser errors']}));
})().catch(error=>{console.error(error);process.exit(1)});
