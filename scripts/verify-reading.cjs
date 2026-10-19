const {chromium}=require('playwright'),assert=require('assert/strict'),path=require('path');
const base=process.env.CROVELI_TEST_URL||'http://localhost:4174/croveli/';
(async()=>{const browser=await chromium.launch({channel:'msedge',headless:true});const context=await browser.newContext();const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
for(const width of [320,390,768,1440]){
 await page.setViewportSize({width,height:900});await page.goto(base+'patterns/long-eared-bunny/');await page.evaluate(()=>localStorage.clear());await page.reload();
 const steps=page.locator('[data-round]'),total=await steps.count();assert.equal(await page.locator('#pattern-progress').getAttribute('value'),'0');
 await page.locator('#continue-pattern').click();assert(await steps.first().locator('..').evaluate(e=>e===document.activeElement));
 await steps.first().check();await steps.nth(1).check();assert.equal(await page.locator('#pattern-progress').evaluate(e=>e.value),2);
 await page.locator('#reading-size').selectOption('22');assert.equal(await page.locator('.round').first().evaluate(e=>getComputedStyle(e).fontSize),'22px');
 await page.reload();assert(await steps.first().isChecked());assert.equal(await page.locator('#reading-size').inputValue(),'22');assert.equal(await page.locator('#pattern-progress').evaluate(e=>e.value),2);
 await page.locator('#continue-pattern').click();assert(await steps.nth(2).locator('..').evaluate(e=>e===document.activeElement));
 const bar=await page.locator('.reading-controls').boundingBox(),row=await steps.nth(2).locator('..').boundingBox();assert(row.y>=bar.y+bar.height-1,'resume row obscured '+width);
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,'overflow '+width);
 if(width===390)await page.screenshot({path:path.resolve(__dirname,'../../croveli-reading-mobile.png')});
 // A skipped earlier step is still available; unchecking explicitly makes it the resume target.
 await steps.first().uncheck();await page.locator('#continue-pattern').click();assert(await steps.first().locator('..').evaluate(e=>e===document.activeElement));
 await page.evaluate(()=>document.querySelectorAll('[data-round]').forEach(i=>{i.checked=true;i.dispatchEvent(new Event('change'))}));
 assert.equal(await page.locator('#pattern-progress').evaluate(e=>e.value),total);await page.getByRole('button',{name:'Go to assembly and finishing'}).click();assert.equal(await page.evaluate(()=>document.activeElement.id),'finishing');
 await page.goto(base+'patterns/luna-witchy-cat/');assert.equal(await page.locator('#pattern-progress').evaluate(e=>e.value),0);assert.equal(await page.locator('#reading-size').inputValue(),'22');
}
const isolated=await browser.newContext();const blocked=await isolated.newPage();await blocked.addInitScript(()=>{Storage.prototype.setItem=function(){throw new DOMException('Blocked','SecurityError')}});await blocked.goto(base+'patterns/pumpkin-cat/');await blocked.locator('[data-round]').first().check();assert.equal(await blocked.locator('#pattern-progress').evaluate(e=>e.value),1);await blocked.locator('#reading-size').selectOption('20');assert.equal(await blocked.locator('.round').first().evaluate(e=>getComputedStyle(e).fontSize),'20px');await isolated.close();
const nojs=await browser.newContext({javaScriptEnabled:false});const np=await nojs.newPage();await np.goto(base+'patterns/sitting-calico-kitten/');assert(await np.locator('[data-round]').count()>0);assert.equal(await np.locator('.reading-controls').count(),0);await nojs.close();
await page.emulateMedia({media:'print'});assert.equal(await page.locator('.reading-controls').isVisible(),false);assert.deepEqual(errors,[]);await browser.close();console.log(JSON.stringify({result:'PASS',widths:[320,390,768,1440],checks:['step progress','reload persistence','resume focus and visibility','three text sizes','text preference shared across patterns','independent pattern progress','completion and uncheck','blocked storage','no-JS content','print controls hidden','no overflow']}));})().catch(e=>{console.error(e);process.exit(1)});
