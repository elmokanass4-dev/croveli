// Progressive enhancement: all public page content and links exist in HTML.
const app = document.querySelector('#app');
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const storage = {
  read(key, fallback = null) { try { return localStorage.getItem(key) ?? fallback; } catch { return fallback; } },
  write(key, value) { try { localStorage.setItem(key, value); return true; } catch { return false; } }
};
function readList(key) { try { const value = JSON.parse(storage.read(key, '[]')); return Array.isArray(value) ? value : []; } catch { return []; } }
let saved = readList('croveli-saved').filter(id => patterns.some(p => p.id === id));
let savedBackup = null;
const currentPattern = patterns.find(p => p.id === document.body.dataset.pattern);
let toastTimer;
function toast(message) { const el = document.querySelector('#toast'); el.textContent = message; el.hidden = false; el.style.display = 'block'; clearTimeout(toastTimer); toastTimer = setTimeout(() => { el.hidden = true; el.style.display = 'none'; }, 3500); }
function route(hash) {
  if (hash.startsWith('#pattern=')) return BASE + 'patterns/' + encodeURIComponent(hash.slice(9)) + '/';
  if (hash.startsWith('#category=')) { try { return BASE + 'patterns/' + decodeURIComponent(hash.slice(10)).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + '/'; } catch { return BASE + 'patterns/'; } }
  return {'#home':BASE,'#patterns':BASE+'patterns/','#saved':BASE+'saved/','#about':BASE+'about/','#privacy':BASE+'privacy/','#terms':BASE+'terms/','#contact':BASE+'contact/'}[hash] || hash;
}
function normalizeLinks(scope = document) {
  scope.querySelectorAll('a[href^="#"]').forEach(a => a.setAttribute('href', route(a.getAttribute('href'))));
  scope.querySelectorAll('img[src^="assets/"]').forEach(img => {
    const name = img.getAttribute('src').slice(7).replace('.jpg', '');
    const small = img.closest('.search-item');
    if(!small&&imageVariants[name]?.avif&&!img.closest('picture')){
      const picture=document.createElement('picture'),source=document.createElement('source');picture.className='responsive-picture';source.type='image/avif';source.srcset=imageVariants[name].variants.map(v=>`${BASE}assets/${name}-${v.file}.avif ${v.width}w`).join(', ');source.sizes='(max-width:600px) calc(100vw - 40px), (max-width:1000px) calc((100vw - 72px)/2), 560px';picture.append(source);img.replaceWith(picture);picture.append(img);
    }
    img.src = BASE + 'assets/' + name + (small ? '-160.webp' : '-400.webp');
    if (!small) { img.srcset = imageVariants[name].variants.map(v => `${BASE}assets/${name}-${v.file}.webp ${v.width}w`).join(', '); img.sizes = '(max-width:600px) calc(100vw - 40px), (max-width:1000px) calc((100vw - 72px)/2), 560px'; }
    img.width = small ? 64 : 400; img.height = small ? 64 : imageDimensions[name]; img.decoding = 'async';
  });
}
function syncSaved() {
  document.querySelector('#saved-count').textContent = saved.length;
  document.querySelectorAll('[data-save]').forEach(button => {
    const selected = saved.includes(button.dataset.save);
    button.classList.toggle('selected', selected); button.setAttribute('aria-pressed', String(selected)); button.innerHTML = selected ? '♥' : '♡';
  });
}
function renderSaved() {
  app.innerHTML = collection('All patterns', true);
  const heading = app.querySelector('.section-heading h2'); if (heading) heading.outerHTML = `<h1>${heading.innerHTML}</h1>`;
  normalizeLinks(app); syncSaved();
  const tools=app.querySelector('#saved-tools');
  if(tools){
    if(saved.length){const clear=document.createElement('button');clear.type='button';clear.className='button light';clear.dataset.action='clear-saved';clear.textContent='Clear saved patterns';tools.append(clear);}
    if(savedBackup){const undo=document.createElement('button');undo.type='button';undo.className='button light';undo.dataset.action='undo-saved';undo.textContent='Undo clear';tools.append(undo);}
    try{localStorage.setItem('croveli-storage-check','1');localStorage.removeItem('croveli-storage-check');}catch{const notice=app.querySelector('#saved-storage-notice');notice.hidden=false;notice.textContent='Browser storage is unavailable. Saves on this page will not be kept after navigation or reload.';}
  }
}
function save(id) {
  const selected = saved.includes(id); saved = selected ? saved.filter(x => x !== id) : [...saved, id];
  const persisted = storage.write('croveli-saved', JSON.stringify(saved));
  if (document.body.dataset.view === 'saved') { renderSaved(); const target = app.querySelector('[data-save]') || app.querySelector('h1'); target.setAttribute('tabindex', target.matches('h1') ? '-1' : '0'); target.focus(); } else syncSaved();
  toast((selected ? 'Removed from saved patterns' : 'Pattern saved') + (persisted ? '' : ' for this visit; browser storage is unavailable.'));
}
if (document.body.dataset.view === 'saved') renderSaved();
normalizeLinks(); syncSaved();

const filterSection = document.querySelector('.collection:has([data-difficulty])');
const discoveryState = {tag:'All projects',level:'All levels'};
function applyDiscovery(updateUrl = true) {
  if (!filterSection) return;
  const category = filterSection.dataset.category;
  const pool = patterns.filter(p=>inCollection(p,category));
  const matchesTag = (p,tag)=>tag==='All projects'||p.tags?.includes(tag);
  const matchesLevel = (p,level)=>level==='All levels'||p.level===level;
  const list = pool.filter(p=>matchesTag(p,discoveryState.tag)&&matchesLevel(p,discoveryState.level));
  for (const [attribute,selectedValue,otherMatch] of [
    ['tag',discoveryState.tag,p=>matchesLevel(p,discoveryState.level)],
    ['difficulty',discoveryState.level,p=>matchesTag(p,discoveryState.tag)]
  ]) filterSection.querySelectorAll(`[data-${attribute}]`).forEach(button=>{
    const value=button.dataset[attribute],selected=value===selectedValue;
    const count=pool.filter(p=>otherMatch(p)&&(attribute==='tag'?matchesTag(p,value):matchesLevel(p,value))).length;
    button.classList.toggle('active',selected);button.setAttribute('aria-pressed',String(selected));button.disabled=count===0&&!selected;
    if(attribute==='tag')button.hidden=value!=='All projects'&&pool.every(p=>p.tags?.includes(value));
    button.textContent=`${value} (${count})`;
    button.setAttribute('aria-label',`${value}, ${count} ${count===1?'project':'projects'}`);
  });
  filterSection.querySelector('.grid').innerHTML=list.map(card).join('');
  filterSection.querySelector('.result-count').textContent=`${list.length} ${list.length===1?'project':'projects'}`;
  filterSection.querySelector('.filter-empty').hidden=list.length!==0;
  filterSection.querySelector('[data-clear-filters]').hidden=discoveryState.tag==='All projects'&&discoveryState.level==='All levels';
  normalizeLinks(filterSection);syncSaved();
  if(updateUrl){const url=new URL(location.href);for(const [key,value,empty] of [['tag',discoveryState.tag,'All projects'],['difficulty',discoveryState.level,'All levels']]){if(value===empty)url.searchParams.delete(key);else url.searchParams.set(key,value.toLowerCase());}history.replaceState(null,'',url);}
}
if (filterSection) {
  const pool=patterns.filter(p=>inCollection(p,filterSection.dataset.category));
  filterSection.querySelector('.discovery-group').hidden=![...filterSection.querySelectorAll('[data-tag]')].some(b=>b.dataset.tag!=='All projects'&&pool.some(p=>!p.tags?.includes(b.dataset.tag)));
  filterSection.querySelector('.difficulty-group').hidden=!pool.some(p=>hasProjectDetail(p.level));
  const params=new URLSearchParams(location.search);
  discoveryState.tag=[...filterSection.querySelectorAll('[data-tag]')].map(b=>b.dataset.tag).find(t=>t.toLowerCase()===params.get('tag')&&pool.some(p=>!p.tags?.includes(t)))||'All projects';
  discoveryState.level=[...new Set(pool.map(p=>p.level).filter(hasProjectDetail))].find(l=>l.toLowerCase()===params.get('difficulty'))||'All levels';
  applyDiscovery(false);
}

document.addEventListener('click', async event => {
  const saveButton = event.target.closest('[data-save]'); if (saveButton) { save(saveButton.dataset.save); return; }
  const difficulty = event.target.closest('[data-difficulty]'); if (difficulty) { discoveryState.level=difficulty.dataset.difficulty;applyDiscovery();return; }
  const tag=event.target.closest('[data-tag]');if(tag){discoveryState.tag=tag.dataset.tag;applyDiscovery();return;}
  if(event.target.closest('[data-clear-filters]')){discoveryState.tag='All projects';discoveryState.level='All levels';applyDiscovery();filterSection.querySelector(filterSection.querySelector('.discovery-group').hidden?'[data-difficulty]':'[data-tag]').focus({preventScroll:true});return;}
  const action = event.target.closest('[data-action]')?.dataset.action;
  if(action==='clear-saved'||action==='undo-saved'){
    if(action==='clear-saved'){savedBackup=[...saved];saved=[];}else{saved=savedBackup||[];savedBackup=null;}
    const persisted=storage.write('croveli-saved',JSON.stringify(saved));renderSaved();
    const focus=app.querySelector(action==='clear-saved'?'[data-action=undo-saved]':'[data-action=clear-saved]')||app.querySelector('h1');focus.setAttribute('tabindex',focus.matches('h1')?'-1':'0');focus.focus({preventScroll:true});
    toast((action==='clear-saved'?'Saved patterns cleared. You can undo this here.':'Saved patterns restored.')+(persisted?'':' Browser storage is unavailable.'));return;
  }
  if (action === 'print') window.print();
  if (action === 'share') {
    try { const url = document.querySelector('link[rel=canonical]').href; await navigator.clipboard.writeText(url); toast('Pattern link copied'); }
    catch { toast('Copy the page address to share this pattern.'); }
  }
  if (action === 'clear') {
    let cleared=true;
    try { Object.keys(localStorage).filter(k => k.startsWith('croveli-')).forEach(k => localStorage.removeItem(k)); } catch { cleared=false; }
    saved = []; savedBackup=null; document.querySelectorAll('[data-round],[data-material]').forEach(i => i.checked = false); document.dispatchEvent(new Event('croveli:cleared')); syncSaved();
    const message=cleared?'Croveli data has been cleared from this browser.':'Your browser blocked data removal. Use its site-data settings to clear stored Croveli data.';
    const status=document.querySelector('#privacy-clear-status');if(status)status.textContent=message;toast(message);
  }
});

// Materials and rounds share the same persistent, readable completion model.
document.querySelectorAll('[data-round],[data-material]').forEach(input => {
  const key = input.dataset.round ? 'croveli-round-' + input.dataset.round : 'croveli-material-' + input.dataset.material;
  input.checked = storage.read(key) === 'true';
  input.addEventListener('change', () => { if (!storage.write(key, String(input.checked))) toast('Progress kept for this visit; browser storage is unavailable.'); });
});
// Reading controls enhance the static tutorial; progress counts instruction rows, not materials.
if (currentPattern) {
  const article = document.querySelector('.article-main');
  const steps = [...article.querySelectorAll('[data-round]')];
  const resumeKey = 'croveli-resume-' + currentPattern.id;
  const toolbar = document.createElement('div');
  toolbar.className = 'reading-controls';
  toolbar.setAttribute('role', 'region'); toolbar.setAttribute('aria-label', 'Pattern reading controls');
  toolbar.innerHTML = `<div class="reading-progress"><label for="pattern-progress" id="pattern-progress-label"></label><progress id="pattern-progress" max="${steps.length}" value="0"></progress></div><div class="reading-actions"><button type="button" class="button" id="continue-pattern">Continue pattern</button><label class="reading-size" for="reading-size">Text size<select id="reading-size"><option value="18">Standard</option><option value="20">Larger</option><option value="22">Largest</option></select></label></div><span class="sr-only" id="reading-status" role="status"></span>`;
  article.prepend(toolbar);
  const size = toolbar.querySelector('#reading-size');
  function setSize(value) {
    const valid = ['18','20','22'].includes(value) ? value : '18';
    size.value = valid; article.style.setProperty('--tutorial-text-size', valid + 'px');
  }
  setSize(storage.read('croveli-reading-size', '18'));
  size.addEventListener('change', () => { setSize(size.value); if (!storage.write('croveli-reading-size', size.value)) toast('Text size changed for this visit; browser storage is unavailable.'); });
  let resume = storage.read(resumeKey);
  const progress = toolbar.querySelector('progress'), progressLabel = toolbar.querySelector('#pattern-progress-label');
  const button = toolbar.querySelector('#continue-pattern');
  function nextStep() { return steps.find(s => s.dataset.round === resume && !s.checked) || steps.find(s => !s.checked); }
  function updateProgress(announce = false) {
    const completed = steps.filter(s => s.checked).length;
    const text = `${completed} of ${steps.length} instruction steps complete`;
    progress.value = completed; progressLabel.textContent = text;
    button.textContent = completed === steps.length ? 'Go to finishing' : 'Continue pattern';
    button.setAttribute('aria-label', completed === steps.length ? 'Go to assembly and finishing' : 'Continue pattern at your next instruction');
    if (announce) toolbar.querySelector('#reading-status').textContent = text;
  }
  steps.forEach((step, index) => step.addEventListener('change', () => {
    const next = step.checked ? steps.slice(index + 1).find(s => !s.checked) || steps.find(s => !s.checked) : step;
    resume = next?.dataset.round || ''; storage.write(resumeKey, resume); updateProgress(true);
  }));
  button.addEventListener('click', () => {
    const next = nextStep();
    const target = next ? next.closest('.round') : document.getElementById('finishing');
    if (next) { resume = next.dataset.round; storage.write(resumeKey, resume); }
    target.setAttribute('tabindex', '-1'); target.focus({preventScroll:true});
    target.scrollIntoView({block:'start', behavior:'instant'});
  });
  document.addEventListener('croveli:cleared', () => { resume = ''; setSize('18'); updateProgress(); });
  // Account for wrapping controls, browser zoom, and safe-area padding when jumping.
  function measureControls() { article.style.setProperty('--reading-offset', Math.ceil(toolbar.getBoundingClientRect().height) + 20 + 'px'); }
  if ('ResizeObserver' in window) new ResizeObserver(measureControls).observe(toolbar);
  measureControls(); updateProgress();
}
function comments() { return readList('croveli-comments-' + currentPattern?.id).filter(c => c && typeof c.name === 'string' && typeof c.text === 'string'); }
function renderComments() { document.querySelector('#comments-list').innerHTML = comments().map(c => `<div class="comment"><strong>${esc(c.name)}</strong><p>${esc(c.text)}</p></div>`).join(''); }
if (currentPattern) {
  renderComments(); document.querySelector('#comment-form').addEventListener('submit', event => {
    event.preventDefault(); const name = document.querySelector('#comment-name').value.trim(), text = document.querySelector('#comment-text').value.trim(); if (!name || !text) return;
    const persisted = storage.write('croveli-comments-' + currentPattern.id, JSON.stringify([...comments(), {name,text}]));
    if (persisted) { renderComments(); event.target.reset(); toast('Your note is saved in this browser'); } else toast('Your note could not be saved. Browser storage is unavailable.');
  });
}

const nav = document.querySelector('#main-navigation'), mobileButton = document.querySelector('.mobile-menu');
const dropdown = document.querySelector('.dropdown'), patternButton = document.querySelector('#pattern-menu');
function closeDropdown(returnFocus = false) { dropdown.classList.remove('open'); patternButton.setAttribute('aria-expanded', 'false'); if (returnFocus) patternButton.focus(); }
function closeNavigation(returnFocus = false) { nav.classList.remove('open'); mobileButton.setAttribute('aria-expanded', 'false'); closeDropdown(); if (returnFocus) mobileButton.focus(); }
mobileButton.addEventListener('click', () => { const open = !nav.classList.contains('open'); nav.classList.toggle('open', open); mobileButton.setAttribute('aria-expanded', String(open)); if (!open) closeDropdown(); });
patternButton.addEventListener('click', () => { const open = !dropdown.classList.contains('open'); dropdown.classList.toggle('open', open); patternButton.setAttribute('aria-expanded', String(open)); });
patternButton.addEventListener('keydown', event => { if (event.key === 'ArrowDown') { event.preventDefault(); dropdown.classList.add('open'); patternButton.setAttribute('aria-expanded','true'); dropdown.querySelector('a').focus(); } });
document.addEventListener('keydown', event => { if (event.key !== 'Escape') return; if (dropdown.classList.contains('open')) closeDropdown(true); else if (nav.classList.contains('open')) closeNavigation(true); });
dropdown.addEventListener('focusout', event => { if (!dropdown.contains(event.relatedTarget)) closeDropdown(); });
document.addEventListener('click', event => { if (!dropdown.contains(event.target)) closeDropdown(); if (!event.target.closest('header') && nav.classList.contains('open')) closeNavigation(); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => closeNavigation()));
const desktopQuery = matchMedia('(min-width:761px)'); desktopQuery.addEventListener('change', () => closeNavigation());

const dialog = document.querySelector('#search-dialog'), searchInput = document.querySelector('#search');
const searchButton = document.querySelector('#search-open');
function search(query) {
  const found = patterns.filter(p => `${p.name} ${p.category} ${p.level} ${(p.tags||[]).join(' ')}`.toLowerCase().includes(query.trim().toLowerCase()));
  document.querySelector('#search-results').innerHTML = found.length ? found.map(p => `<a class="search-item" href="${BASE}patterns/${p.id}/"><img src="assets/${p.image}" alt="" width="64" height="64"><span>${p.name}<small>${p.category} · Free pattern</small></span><span aria-hidden="true">↗</span></a>`).join('') : '<p>No patterns found. Try “bunny”, “cat”, or “pumpkin”.</p>';
  document.querySelector('#search-status').textContent = `${found.length} ${found.length === 1 ? 'pattern' : 'patterns'} found`;
  normalizeLinks(dialog); dialog.querySelectorAll('.search-item').forEach(a => a.addEventListener('click', () => dialog.close()));
}
searchButton.addEventListener('click', () => { closeNavigation(); dialog.showModal(); document.body.classList.add('search-is-open'); searchInput.value = ''; search(''); searchInput.focus(); });
dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('keydown', event => { if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); dialog.close(); } });
dialog.addEventListener('close', () => { document.body.classList.remove('search-is-open'); searchButton.focus(); });
dialog.addEventListener('click', event => { const bounds = dialog.getBoundingClientRect(); if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close(); });
searchInput.addEventListener('input', event => search(event.target.value));

// Source images remain ordinary links without JavaScript.
const tutorialPhotos = [...document.querySelectorAll('[data-tutorial-photo]')];
if (tutorialPhotos.length && typeof HTMLDialogElement !== 'undefined') {
  const viewer = document.createElement('dialog');
  viewer.className = 'photo-viewer'; viewer.setAttribute('aria-labelledby', 'photo-viewer-title');
  viewer.innerHTML = `<div class="photo-viewer-header"><h2 id="photo-viewer-title">Tutorial photos</h2><button type="button" class="button light" data-photo-close>Close</button></div><div class="photo-viewer-stage" tabindex="0" role="region" aria-label="Photo detail; scroll to explore when zoomed"><img alt=""></div><p class="photo-viewer-caption" id="photo-viewer-caption"></p><div class="photo-viewer-actions"><button type="button" class="button light" data-photo-prev>Previous</button><button type="button" class="button light" data-photo-zoom aria-pressed="false">Zoom in</button><button type="button" class="button light" data-photo-next>Next</button></div><p class="photo-viewer-status" role="status" aria-live="polite"></p>`;
  document.body.append(viewer);
  let group = [], index = 0, opener;
  const stage = viewer.querySelector('.photo-viewer-stage'), image = stage.querySelector('img');
  const zoom = viewer.querySelector('[data-photo-zoom]'), previous = viewer.querySelector('[data-photo-prev]'), next = viewer.querySelector('[data-photo-next]');
  function resetZoom() { stage.classList.remove('is-zoomed'); image.style.width = ''; zoom.textContent = 'Zoom in'; zoom.setAttribute('aria-pressed','false'); stage.scrollTop = 0; stage.scrollLeft = 0; }
  function showPhoto() {
    resetZoom(); const link = group[index], section = link.closest('.pattern-component');
    image.src = link.href; image.alt = link.querySelector('img').alt;
    viewer.querySelector('h2').textContent = section.querySelector('h3').textContent;
    const caption = link.closest('figure').querySelector('figcaption').cloneNode(true);
    caption.querySelector('.photo-number')?.remove();
    viewer.querySelector('.photo-viewer-caption').textContent = caption.textContent;
    viewer.querySelector('.photo-viewer-status').textContent = link.closest('figure').querySelector('.photo-number').textContent;
    // Keep controls focusable at either end; aria-disabled preserves keyboard focus.
    previous.setAttribute('aria-disabled', String(index === 0)); next.setAttribute('aria-disabled', String(index === group.length-1));
  }
  tutorialPhotos.forEach(link => link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault(); opener = link; group = [...link.closest('.pattern-figures').querySelectorAll('[data-tutorial-photo]')]; index = group.indexOf(link);
    showPhoto(); viewer.showModal(); document.body.classList.add('photo-is-open'); viewer.querySelector('[data-photo-close]').focus();
  }));
  previous.addEventListener('click', () => { if(index>0){index--;showPhoto();} });
  next.addEventListener('click', () => { if(index<group.length-1){index++;showPhoto();} });
  zoom.addEventListener('click', () => { const expanded = stage.classList.toggle('is-zoomed'); image.style.width = expanded ? Math.max(image.naturalWidth, stage.clientWidth*1.5)+'px' : ''; zoom.textContent = expanded?'Fit photo':'Zoom in'; zoom.setAttribute('aria-pressed',String(expanded)); stage.scrollTop=0;stage.scrollLeft=0; });
  viewer.querySelector('[data-photo-close]').addEventListener('click', () => viewer.close());
  viewer.addEventListener('keydown', event => {
    if(event.key==='Escape'){event.preventDefault();event.stopPropagation();viewer.close();}
    if(!stage.classList.contains('is-zoomed') && ['ArrowLeft','ArrowRight'].includes(event.key)){event.preventDefault();(event.key==='ArrowLeft'?previous:next).click();}
  });
  viewer.addEventListener('click', event => { const r=viewer.getBoundingClientRect();if(event.target===viewer&&(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom))viewer.close(); });
  viewer.addEventListener('close', () => { document.body.classList.remove('photo-is-open'); resetZoom();opener?.focus({preventScroll:true}); });
}

// Follow the reader without scrolling the sidebar or stealing keyboard focus.
const tocLinks = [...document.querySelectorAll('.pattern-sidebar .toc a')];
if (tocLinks.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => { const first = entries.filter(e => e.isIntersecting).sort((a,b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]; if (!first) return;
    tocLinks.forEach(a => { const active = a.hash === '#' + first.target.id; a.classList.toggle('is-current', active); if (active) a.setAttribute('aria-current','location'); else a.removeAttribute('aria-current'); });
  }, {rootMargin:'-10% 0px -60% 0px'});
  tocLinks.forEach(a => { const target = document.getElementById(a.hash.slice(1)); if (target) observer.observe(target); });
}
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', () => { const target = document.getElementById(a.hash.slice(1)); if (target && !target.matches('input,button,a,textarea')) { target.setAttribute('tabindex','-1'); target.focus({preventScroll:true}); } }));
if (/^#(pattern=|category=|home$|patterns$|saved$|about$|privacy$|terms$|contact$)/.test(location.hash)) location.replace(route(location.hash));

// If a provider response stalls, keep a clear recovery path without claiming signup.
const newsletterForm=document.querySelector('.newsletter-inline .ml-block-form');
if(newsletterForm){newsletterForm.addEventListener('submit',()=>{if(!newsletterForm.checkValidity())return;const error=newsletterForm.querySelector('.newsletter-error');error.hidden=true;window.setTimeout(()=>{if(document.querySelector('.newsletter-inline .row-success').style.display==='block')return;error.textContent='We could not confirm your request. Please try the hosted signup page below.';error.hidden=false;},15000);});}

// Connect to the newsletter provider only after an explicit visitor action.
const enableNewsletter=document.querySelector('[data-enable-newsletter]');
if(enableNewsletter){enableNewsletter.addEventListener('click',()=>{
 const wrapper=enableNewsletter.closest('.newsletter-inline'),status=wrapper.querySelector('.newsletter-load-status');
 enableNewsletter.disabled=true;status.textContent='Loading the email form…';
 const script=document.createElement('script');script.src='https://groot.mailerlite.com/js/w/webforms.min.js?v83147fa8ce2d95cb73ece7f28b469519';script.async=true;
 let finished=false;const failure=()=>{if(finished)return;finished=true;status.textContent='The email form could not load. Please use the hosted signup page below.';enableNewsletter.hidden=true;};
 const timer=setTimeout(failure,15000);
 script.onerror=()=>{clearTimeout(timer);failure();};
 script.onload=()=>{clearTimeout(timer);if(finished)return;finished=true;wrapper.querySelector('.ml-form-embedContainer').hidden=false;wrapper.querySelector('.newsletter-gate').hidden=true;wrapper.querySelector('#newsletter-email').focus();};
 document.head.append(script);
});}
