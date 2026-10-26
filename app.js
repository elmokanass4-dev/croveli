const hasProjectDetail=function hasProjectDetail(value){return typeof value==='string'&&value.trim()&&!/^(not specified(?: in source)?|not listed|unknown|n\/a)$/i.test(value.trim())};
const collectionRules={"All patterns":{},"Amigurumi":{"category":"Amigurumi"},"Cats":{"tag":"Cats"},"Halloween":{"tag":"Halloween"},"Bags":{"category":"Bags"},"Christmas":{"tag":"Christmas"}};
const inCollection=function inCollection(p,name){const rule=collectionRules[name];return name==='All patterns'||!!rule&&((!rule.category&&!rule.tag)||rule.category===p.category||(p.tags||[]).includes(rule.tag))};
const BASE="/croveli/";
const patterns=[{"id":"long-eared-bunny","name":"Long-eared Bunny","category":"Amigurumi","level":"Not specified","hook":"3.5 mm","size":"Not specified in source","image":"long-eared-bunny.jpg","alt":"Golden chenille crochet bunny with long ears, a pink nose, and a grey jacket","focal":"50% 40%","description":"Make a soft, long-eared bunny with this free amigurumi crochet pattern. Work the chenille legs and arms first, join them into the body, then shape the head and add the embroidered expression.","tags":["Bunnies"]},{"id":"sitting-calico-kitten","name":"Sitting Calico Kitten","category":"Amigurumi","level":"Not specified","hook":"1.5 mm","size":"Approximately 12 cm","image":"sitting-calico-kitten.jpg","alt":"White, black and golden crochet calico kitten with a red collar","focal":"50% 48%","description":"This free calico cat crochet pattern creates a sitting kitten with a patchwork coat and a tiny collar. Follow the color changes for the head and body, then use the photo sequence to shape and embroider the face.","tags":["Cats"]},{"id":"pumpkin-cat","name":"Pumpkin Cat","category":"Amigurumi","level":"Not specified","hook":"2.00–2.25 mm","size":"Approximately 12 cm","image":"pumpkin-cat.jpg","alt":"Black crochet cat wearing a purple witch hat on an orange pumpkin","focal":"50% 48%","description":"Bring a little Halloween character to your shelf with this free pumpkin cat crochet pattern. The project pairs a small black cat with a purple witch hat, an orange pumpkin, and a leafy finishing detail.","tags":["Cats","Halloween"]},{"id":"luna-witchy-cat","name":"Luna the Witchy Cat","category":"Amigurumi","level":"Intermediate","hook":"2.5 mm","size":"Approximately 13.5 cm","image":"luna-witchy-cat.jpg","alt":"Grey crochet witch cat with a mauve pointed hat, ruffled skirt and plum cloak","focal":"50% 48%","description":"Make Luna, a grey witch cat with a pointed hat, wavy skirt, and plum cloak, with this free crochet pattern. This intermediate amigurumi project brings together shaped cat pieces, small clothing details, and facial embroidery.","tags":["Cats","Halloween"]},{"id":"acorn-crossbody-bag","name":"Acorn Crossbody Bag & Charm","category":"Bags","level":"Not specified","hook":"3.0–3.5 mm","size":"Not specified in source","image":"acorn-crossbody-bag.jpg","alt":"Brown and cream crochet crossbody bag with scalloped trim and a hanging acorn charm","focal":"45% 85%","description":"Crochet a brown-and-cream crossbody bag with a ribbed lower body, a scalloped border, and a small stuffed acorn charm. The made-to-length strap clips onto D-rings for an everyday carry.","tags":["Bags"]},{"id":"bow-knot-handbag","name":"Bow-Knot Handbag","category":"Bags","level":"Not specified","hook":"3.0 mm","size":"Not specified in source","image":"bow-knot-handbag.jpg","alt":"Cream mesh crochet handbag with a knotted bow handle, shown with a decorative bunny charm","focal":"48% 62%","description":"Make a soft crochet handbag with alternating mesh rounds and a handle shaped into a bow. Start with an oval base, build the openwork body, and taper the straps into flared bow ends.","tags":["Bags"]},{"id":"granny-breeze-bag","name":"Granny Breeze Bag","category":"Bags","level":"Not specified","hook":"3.0 mm","size":"38 × 30 cm, without straps","image":"granny-breeze-bag.jpg","alt":"Close-up of a beige granny-style crochet tote with tan sewn-on handles","focal":"48% 62%","description":"Crochet an airy granny-style tote from two matching panels, joined along three sides and finished with sewn-on handles. Choose the cotton-yarn or 2 mm cotton-rope version from the supplied instructions.","tags":["Bags"]},{"id":"christmas-santa","name":"Christmas Santa","category":"Amigurumi","level":"Not specified","hook":"2.0 mm","size":"Sweet Child: 11 cm (4.33 in); other versions not specified","image":"christmas-santa.jpg","alt":"Small crochet Christmas doll in a cream outfit and red pom-pom hat, with a wooden heart button","focal":"38% 48%","description":"Make a little Christmas keepsake with three Santa crochet designs: a Sweet Child ornament, a mini hanging pendant, and a tiny Santa keychain.","tags":["Christmas"]},{"id":"christmas-green-man","name":"Christmas Green Man","category":"Amigurumi","level":"Not specified","hook":"3.75 mm","size":"29 cm (11.4 in)","image":"christmas-green-man.jpg","alt":"Green crochet Christmas character wearing a red Santa coat and white-trimmed hat, with curled red boots","focal":"50% 45%","description":"Crochet a plush Christmas Green Man with a red coat, curled boots, textured trim, and a sculpted expression. Follow the separate components through joining and finishing.","tags":["Christmas"]},{"id":"blue-laptop-case","name":"Blue Laptop Case","category":"Accessories","level":"Easy","hook":"Not specified in source","size":"Approx. 14 in wide × 9 in high when buttoned","image":"blue-laptop-case.jpg","alt":"Blue crochet laptop sleeve with a button closure","focal":"50% 45%","description":"A blue crochet laptop sleeve worked flat with two strands held together, then folded and seamed with a buttoned flap.","tags":["Accessories","Laptop cases"]},{"id":"christmas-santa-dog-bandana","name":"Christmas Santa Dog Bandana","category":"Accessories","level":"Easy","hook":"5.0 mm; 3.75 mm for buckle","size":"Small: 6.5 × 5.5 in; medium/large: 8 × 8.5 in","image":"christmas-santa-dog-bandana.jpg","alt":"Dog wearing a red Santa crochet bandana with a black belt, yellow buckle, and fluffy white trim","focal":"50% 45%","description":"A Santa-inspired crochet dog bandana with a tie-on collar, black belt, golden buckle, and fluffy white trim in two sizes.","tags":["Christmas","Accessories","Pet accessories"]}];
const cats=["All patterns","Amigurumi","Cats","Halloween","Bags","Christmas"];
const imageDimensions={"long-eared-bunny":536,"bunny-legs":179,"bunny-body":194,"bunny-ear":379,"bunny-face-points":428,"sitting-calico-kitten":359,"calico-neck-socket":110,"calico-eye-placement":120,"calico-face-step-1":93,"calico-face-one":97,"calico-face-step-2":84,"calico-face-step-3":94,"calico-face-step-4":96,"calico-face-step-5":86,"calico-face-step-6":98,"calico-face-step-7":85,"calico-face-step-8":82,"calico-face-step-9":86,"calico-face-step-10":98,"calico-face-step-11":83,"calico-face-two":103,"calico-ears":99,"calico-body-join":102,"calico-neck-wire":83,"calico-seated-legs":93,"pumpkin-cat":536,"pumpkin-cat-head":498,"pumpkin-cat-face":702,"pumpkin-cat-pumpkin":497,"luna-witchy-cat":358,"luna-head":400,"luna-arm":400,"luna-body":400,"luna-skirt":400,"luna-cloak":400,"luna-hat":400,"acorn-crossbody-bag":400,"bow-knot-handbag":299,"granny-breeze-bag":536,"granny-breeze-process-1":467,"granny-breeze-process-2":436,"granny-breeze-process-3":432,"granny-breeze-process-4":437,"granny-breeze-process-5":396,"christmas-santa":224,"christmas-santa-reference":500,"christmas-green-man":536,"christmas-green-man-reference-5":566,"christmas-green-man-reference-6":566,"christmas-green-man-reference-7":566,"christmas-green-man-reference-8":566,"christmas-green-man-reference-9":566,"christmas-green-man-reference-10":566,"christmas-green-man-reference-11":566,"christmas-green-man-reference-12":566,"christmas-green-man-reference-13":566,"christmas-green-man-reference-14":566,"christmas-green-man-reference-15":566,"christmas-green-man-reference-16":566,"christmas-green-man-reference-17":566,"christmas-green-man-reference-18":566,"christmas-green-man-reference-19":566,"christmas-green-man-reference-20":566,"christmas-green-man-reference-21":566,"christmas-green-man-reference-22":566,"christmas-green-man-reference-24":566,"christmas-green-man-reference-25":566,"christmas-green-man-reference-26":566,"christmas-green-man-reference-27":566,"christmas-green-man-reference-28":566,"christmas-green-man-reference-29":566,"blue-laptop-case":320,"blue-laptop-case-p1-image0":224,"blue-laptop-case-p1-image1":400,"blue-laptop-case-p1-image2":400,"blue-laptop-case-p1-image3":400,"blue-laptop-case-p2-image0":223,"blue-laptop-case-p2-image1":400,"blue-laptop-case-p3-image0":320,"blue-laptop-case-p3-image1":299,"christmas-santa-dog-bandana":224,"christmas-santa-dog-bandana-p1-image0":223,"christmas-santa-dog-bandana-p1-image1":716,"christmas-santa-dog-bandana-p2-image0":223,"christmas-santa-dog-bandana-p4-image0":224};
const imageVariants={"long-eared-bunny":{"width":800,"height":1071,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1200}],"avif":true},"bunny-legs":{"width":134,"height":179,"variants":[{"file":400,"width":134}],"avif":false},"bunny-body":{"width":153,"height":194,"variants":[{"file":400,"width":153}],"avif":false},"bunny-ear":{"width":288,"height":379,"variants":[{"file":400,"width":288}],"avif":false},"bunny-face-points":{"width":362,"height":428,"variants":[{"file":400,"width":362}],"avif":false},"sitting-calico-kitten":{"width":800,"height":718,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":913}],"avif":true},"calico-neck-socket":{"width":163,"height":110,"variants":[{"file":400,"width":163}],"avif":false},"calico-eye-placement":{"width":177,"height":120,"variants":[{"file":400,"width":177}],"avif":false},"calico-face-step-1":{"width":195,"height":93,"variants":[{"file":400,"width":195}],"avif":false},"calico-face-one":{"width":202,"height":97,"variants":[{"file":400,"width":202}],"avif":false},"calico-face-step-2":{"width":174,"height":84,"variants":[{"file":400,"width":174}],"avif":false},"calico-face-step-3":{"width":196,"height":94,"variants":[{"file":400,"width":196}],"avif":false},"calico-face-step-4":{"width":203,"height":96,"variants":[{"file":400,"width":203}],"avif":false},"calico-face-step-5":{"width":178,"height":86,"variants":[{"file":400,"width":178}],"avif":false},"calico-face-step-6":{"width":207,"height":98,"variants":[{"file":400,"width":207}],"avif":false},"calico-face-step-7":{"width":176,"height":85,"variants":[{"file":400,"width":176}],"avif":false},"calico-face-step-8":{"width":172,"height":82,"variants":[{"file":400,"width":172}],"avif":false},"calico-face-step-9":{"width":178,"height":86,"variants":[{"file":400,"width":178}],"avif":false},"calico-face-step-10":{"width":204,"height":98,"variants":[{"file":400,"width":204}],"avif":false},"calico-face-step-11":{"width":173,"height":83,"variants":[{"file":400,"width":173}],"avif":false},"calico-face-two":{"width":190,"height":103,"variants":[{"file":400,"width":190}],"avif":false},"calico-ears":{"width":184,"height":99,"variants":[{"file":400,"width":184}],"avif":false},"calico-body-join":{"width":162,"height":102,"variants":[{"file":400,"width":162}],"avif":false},"calico-neck-wire":{"width":172,"height":83,"variants":[{"file":400,"width":172}],"avif":false},"calico-seated-legs":{"width":144,"height":93,"variants":[{"file":400,"width":144}],"avif":false},"pumpkin-cat":{"width":800,"height":1071,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1200}],"avif":true},"pumpkin-cat-head":{"width":800,"height":996,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1076}],"avif":false},"pumpkin-cat-face":{"width":800,"height":1404,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1076}],"avif":false},"pumpkin-cat-pumpkin":{"width":800,"height":993,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1080}],"avif":false},"luna-witchy-cat":{"width":800,"height":715,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1200}],"avif":true},"luna-head":{"width":461,"height":461,"variants":[{"file":400,"width":400},{"file":800,"width":461}],"avif":false},"luna-arm":{"width":454,"height":454,"variants":[{"file":400,"width":400},{"file":800,"width":454}],"avif":false},"luna-body":{"width":454,"height":454,"variants":[{"file":400,"width":400},{"file":800,"width":454}],"avif":false},"luna-skirt":{"width":454,"height":454,"variants":[{"file":400,"width":400},{"file":800,"width":454}],"avif":false},"luna-cloak":{"width":451,"height":451,"variants":[{"file":400,"width":400},{"file":800,"width":451}],"avif":false},"luna-hat":{"width":461,"height":461,"variants":[{"file":400,"width":400},{"file":800,"width":461}],"avif":false},"acorn-crossbody-bag":{"width":800,"height":800,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1200}],"avif":true},"bow-knot-handbag":{"width":800,"height":597,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1200}],"avif":true},"granny-breeze-bag":{"width":800,"height":1071,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1200}],"avif":true},"granny-breeze-process-1":{"width":779,"height":909,"variants":[{"file":400,"width":400},{"file":800,"width":779}],"avif":false},"granny-breeze-process-2":{"width":704,"height":767,"variants":[{"file":400,"width":400},{"file":800,"width":704}],"avif":false},"granny-breeze-process-3":{"width":800,"height":863,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":845}],"avif":false},"granny-breeze-process-4":{"width":800,"height":873,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1056}],"avif":false},"granny-breeze-process-5":{"width":707,"height":700,"variants":[{"file":400,"width":400},{"file":800,"width":707}],"avif":false},"christmas-santa":{"width":800,"height":447,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1200}],"avif":true},"christmas-santa-reference":{"width":800,"height":1000,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1080}],"avif":false},"christmas-green-man":{"width":800,"height":1071,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1200}],"avif":true},"christmas-green-man-reference-5":{"width":800,"height":1132,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1075}],"avif":false},"christmas-green-man-reference-6":{"width":800,"height":1132,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1075}],"avif":false},"christmas-green-man-reference-7":{"width":800,"height":1132,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1075}],"avif":false},"christmas-green-man-reference-8":{"width":800,"height":1132,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1075}],"avif":false},"christmas-green-man-reference-9":{"width":800,"height":1132,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1075}],"avif":false},"christmas-green-man-reference-10":{"width":800,"height":1132,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1075}],"avif":false},"christmas-green-man-reference-11":{"width":800,"height":1132,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1075}],"avif":false},"christmas-green-man-reference-12":{"width":800,"height":1132,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1075}],"avif":false},"christmas-green-man-reference-13":{"width":800,"height":1132,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1075}],"avif":false},"christmas-green-man-reference-14":{"width":800,"height":1132,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1075}],"avif":false},"christmas-green-man-reference-15":{"width":800,"height":1132,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1075}],"avif":false},"christmas-green-man-reference-16":{"width":800,"height":1132,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1075}],"avif":false},"christmas-green-man-reference-17":{"width":800,"height":1132,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1075}],"avif":false},"christmas-green-man-reference-18":{"width":800,"height":1132,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1075}],"avif":false},"christmas-green-man-reference-19":{"width":800,"height":1132,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1075}],"avif":false},"christmas-green-man-reference-20":{"width":800,"height":1132,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1075}],"avif":false},"christmas-green-man-reference-21":{"width":800,"height":1132,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1075}],"avif":false},"christmas-green-man-reference-22":{"width":800,"height":1132,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1075}],"avif":false},"christmas-green-man-reference-24":{"width":800,"height":1132,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1075}],"avif":false},"christmas-green-man-reference-25":{"width":800,"height":1132,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1075}],"avif":false},"christmas-green-man-reference-26":{"width":800,"height":1132,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1075}],"avif":false},"christmas-green-man-reference-27":{"width":800,"height":1132,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1075}],"avif":false},"christmas-green-man-reference-28":{"width":800,"height":1132,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1075}],"avif":false},"christmas-green-man-reference-29":{"width":800,"height":1132,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1075}],"avif":false},"blue-laptop-case":{"width":800,"height":640,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1000}],"avif":true},"blue-laptop-case-p1-image0":{"width":800,"height":447,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1200}],"avif":false},"blue-laptop-case-p1-image1":{"width":615,"height":615,"variants":[{"file":400,"width":400},{"file":800,"width":615}],"avif":false},"blue-laptop-case-p1-image2":{"width":615,"height":615,"variants":[{"file":400,"width":400},{"file":800,"width":615}],"avif":false},"blue-laptop-case-p1-image3":{"width":615,"height":615,"variants":[{"file":400,"width":400},{"file":800,"width":615}],"avif":false},"blue-laptop-case-p2-image0":{"width":800,"height":446,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":826}],"avif":false},"blue-laptop-case-p2-image1":{"width":800,"height":800,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":820}],"avif":false},"blue-laptop-case-p3-image0":{"width":600,"height":480,"variants":[{"file":400,"width":400},{"file":800,"width":600}],"avif":false},"blue-laptop-case-p3-image1":{"width":800,"height":598,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":960}],"avif":false},"christmas-santa-dog-bandana":{"width":800,"height":447,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1200}],"avif":true},"christmas-santa-dog-bandana-p1-image0":{"width":800,"height":446,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1200}],"avif":false},"christmas-santa-dog-bandana-p1-image1":{"width":615,"height":1101,"variants":[{"file":400,"width":400},{"file":800,"width":615}],"avif":false},"christmas-santa-dog-bandana-p2-image0":{"width":800,"height":446,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":826}],"avif":false},"christmas-santa-dog-bandana-p4-image0":{"width":800,"height":447,"variants":[{"file":400,"width":400},{"file":800,"width":800},{"file":1200,"width":1101}],"avif":false}};
const card=function card(p){return `<article class="card" data-level="${hasProjectDetail(p.level)?p.level:''}"><div class="card-img"><a href="#pattern=${p.id}"><img style="object-position:${p.focal||'50% 50%'}" src="assets/${p.image}" alt="${p.alt}" loading="lazy"></a><span class="badge">FREE PATTERN</span><button class="save ${saved.includes(p.id)?'selected':''}" data-save="${p.id}" aria-label="Save ${p.name}" aria-pressed="${saved.includes(p.id)}">${saved.includes(p.id)?'♥':'♡'}</button></div><div class="card-body"><span class="eyebrow">${p.category}</span><h3><a href="#pattern=${p.id}">${p.name}</a></h3><div class="card-meta"><span>${p.hook} hook<span aria-hidden="true"> · </span>${hasProjectDetail(p.size)?p.size:'US terms'}</span></div><a class="card-action text-link" href="#pattern=${p.id}" aria-label="View free pattern: ${p.name}">View free pattern <svg class="ui-symbol symbol-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14"/></svg></a></div></article>`};
const collection=function collection(category='All patterns',isSaved=false){let list=isSaved?patterns.filter(p=>saved.includes(p.id)):category==='All patterns'?patterns:patterns.filter(p=>inCollection(p,category));return `<section class="section collection" id="patterns" data-category="${category}"><div class="section-heading"><div><span class="eyebrow">${isSaved?'YOUR PROJECT BASKET':'A LITTLE SOMETHING FOR EVERY MAKER'}</span><h2>${isSaved?'Saved for a cozy day':category==='All patterns'?'Find your next free pattern.':category==='Beginners'?'Beginner crochet projects':category}</h2></div><span class="result-count" aria-live="polite">${list.length} projects</span></div>${isSaved?'<div class="saved-intro"><p>Your saved projects stay in this browser. No account is needed, and the list does not sync across devices. Clearing site data removes it.</p><p id="saved-storage-notice" role="status" hidden></p><div id="saved-tools"></div><noscript><p>Enable JavaScript to save projects here. All patterns remain available to read.</p></noscript></div>':`<div class="filter-panel"><div class="filter-group"><span class="filter-label">Collections</span><div class="categories" role="group" aria-label="Project categories">${cats.filter(c=>c!=='Beginners').map(c=>`<a class="chip ${(c===category||(c==='All patterns'&&category==='Beginners'))?'active':''}" ${(c===category||(c==='All patterns'&&category==='Beginners'))?'aria-current="page"':''} href="${c==='All patterns'?'#patterns':'#category='+encodeURIComponent(c)}">${c}</a>`).join('')}</div></div><div class="filter-group discovery-group" hidden><span class="filter-label">Explore</span><div class="discovery-filters" role="group" aria-label="Filter by project theme">${['All projects',...new Set(list.flatMap(p=>p.tags||[]))].map(t=>`<button class="chip ${t==='All projects'?'active':''}" type="button" data-tag="${t}" aria-pressed="${t==='All projects'}">${t}</button>`).join('')}</div></div><div class="filter-group difficulty-group" hidden><span class="filter-label">Difficulty</span><div class="difficulty-filters" role="group" aria-label="Filter by difficulty">${['All levels',...new Set(patterns.map(p=>p.level).filter(hasProjectDetail))].map(l=>`<button class="chip ${l===(category==='Beginners'?'Beginner':'All levels')?'active':''}" type="button" data-difficulty="${l}" aria-pressed="${l===(category==='Beginners'?'Beginner':'All levels')}">${l}</button>`).join('')}</div></div><button type="button" class="clear-filters text-link" data-clear-filters hidden>Clear filters</button></div>`}<div class="grid">${list.length?list.map(card).join(''):'<div class="empty"><h3>A little room for inspiration.</h3><p>Tap the heart on any pattern to save it here.</p><a class="button" href="#patterns">Explore patterns <svg class="ui-symbol symbol-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14"/></svg></a></div>'}</div><p class="filter-empty" role="status" hidden>No projects match these filters. Clear the filters to see all projects.</p></section>`};
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
if (currentPattern && document.querySelector('.article-main')) {
  const article = document.querySelector('.article-main');
  const steps = [...article.querySelectorAll('[data-round]')];
  const resumeKey = 'croveli-resume-' + currentPattern.id;
  const toolbar = document.createElement('div');
  toolbar.className = 'reading-controls';
  toolbar.setAttribute('role', 'region'); toolbar.setAttribute('aria-label', 'Pattern reading controls');
  toolbar.innerHTML = `<div class="reading-progress"><label for="pattern-progress" id="pattern-progress-label"></label><progress id="pattern-progress" max="${steps.length}" value="0"></progress></div><div class="reading-actions"><button type="button" class="button" id="continue-pattern">Continue pattern</button><label class="reading-size" for="reading-size">Text size<select id="reading-size"><option value="18">Standard</option><option value="20">Larger</option><option value="22">Largest</option></select></label></div><span class="sr-only" id="reading-status" role="status"></span>`;
  const instructionHeading = article.classList.contains('editorial-content') ? article.querySelector('#instructions') : null;
  if (instructionHeading) instructionHeading.before(toolbar); else article.prepend(toolbar);
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
if (currentPattern && document.querySelector('#comment-form')) {
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
  document.querySelector('#search-results').innerHTML = found.length ? found.map(p => `<a class="search-item" href="${BASE}patterns/${p.id}/"><img src="assets/${p.image}" alt="" width="64" height="64"><span>${p.name}<small>${p.category} · Free pattern</small></span><span aria-hidden="true"><svg class="ui-symbol symbol-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14"/></svg></span></a>`).join('') : '<p>No patterns found. Try “bunny”, “cat”, or “pumpkin”.</p>';
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
