const {spawnSync}=require('child_process'),fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..');
const checks=['build.cjs','check-links.cjs','verify.cjs','verify-polish.cjs','verify-reading.cjs','verify-photos.cjs','verify-discovery.cjs','verify-learning-links.cjs','verify-collections.cjs','verify-search-focus.cjs','verify-catalog.cjs','verify-visitor.cjs','verify-import.cjs','verify-image-delivery.cjs','verify-accessibility.cjs','verify-launch-http.cjs'];
const results=[];
for(const script of checks){const start=Date.now();const r=spawnSync(process.execPath,[path.join(__dirname,script)],{cwd:root,env:process.env,encoding:'utf8',timeout:300000});if(r.stdout)process.stdout.write(r.stdout);if(r.stderr)process.stderr.write(r.stderr);results.push({script,result:r.status===0?'PASS':'FAIL',elapsedMs:Date.now()-start});if(r.status!==0){fs.writeFileSync(path.join(root,'launch-suite-results.json'),JSON.stringify({result:'FAIL',localOnly:true,results},null,2)+'\n');process.exit(1);}}
fs.writeFileSync(path.join(root,'launch-suite-results.json'),JSON.stringify({result:'PASS',localOnly:true,results},null,2)+'\n');
console.log(JSON.stringify({result:'PASS',checks:checks.length,localOnly:true,note:'Native Safari, live Google indexing, email delivery, and field Core Web Vitals are separate checks.'}));
