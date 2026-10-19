const http=require('http'),fs=require('fs'),path=require('path');
const zlib=require('zlib');
const root=path.resolve(__dirname,'..');
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.avif':'image/avif','.webp':'image/webp','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.svg':'image/svg+xml','.xml':'application/xml; charset=utf-8','.json':'application/json; charset=utf-8','.txt':'text/plain; charset=utf-8'};
function createServer(){return http.createServer((req,res)=>{
 let url;try{url=decodeURIComponent(req.url.split('?')[0]);if(url.includes('\0'))throw Error('Invalid path');}catch{res.writeHead(400,{'Content-Type':'text/plain; charset=utf-8'});res.end('Invalid request path');return;}
 res.setHeader('Cache-Control','no-store');
 if(url==='/'||url==='/croveli'){res.writeHead(302,{Location:'/croveli/'});res.end();return;}
 if(!url.startsWith('/croveli/')){res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});res.end('Page not found');return;}
 let file=path.resolve(root,url.slice('/croveli/'.length));if(!file.startsWith(root+path.sep)&&file!==root){res.writeHead(403);res.end();return;}
 try{if(fs.statSync(file).isDirectory())file=path.join(file,'index.html');const type=types[path.extname(file)]||'application/octet-stream';res.setHeader('Content-Type',type);const data=fs.readFileSync(file);if(/^(text\/|application\/(json|xml)|image\/svg)/.test(type)&&/\bgzip\b/.test(req.headers['accept-encoding']||'')){res.setHeader('Content-Encoding','gzip');res.setHeader('Vary','Accept-Encoding');res.end(zlib.gzipSync(data));}else res.end(data);}catch{res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'});res.end(fs.readFileSync(path.join(root,'404.html')));}
 });}
if(require.main===module)createServer().listen(Number(process.env.PORT)||4174,()=>console.log('http://localhost:'+(process.env.PORT||4174)+'/croveli/'));
module.exports={createServer};
