// Run after extracting the supplied PDFs; originals stay outside the public site.
const fs=require('fs'),path=require('path'),sharp=require('sharp');
const source=process.argv[2]||'C:/Users/anass/OneDrive/Desktop/Crochet patterns';
const extracted=process.argv[3]||path.resolve(__dirname,'../../outputs/croveli-import');
const assets=path.resolve(__dirname,'../assets');
const primary={
 'long-eared-bunny':['buney crochet','image.png_2K_20261019141621.jpg'],
 'sitting-calico-kitten':['cat crochet','cat crochet.jpg'],
 'pumpkin-cat':['Pumpkin Cat Halloween','page_14_img_1.jpg_2K_20261019140544.jpg'],
 'luna-witchy-cat':['Witchy_Cat','cute cat wearing christmas costume.jpg']
};
const figures={
 'bunny-legs':['buney crochet','p03-04-'], 'bunny-body':['buney crochet','p05-02-'],
 'bunny-ear':['buney crochet','p07-02-'], 'bunny-face-points':['buney crochet','p10-04-'],
 'calico-neck-socket':['cat crochet','p05-03-'], 'calico-eye-placement':['cat crochet','p05-09-'],
 'calico-face-one':['cat crochet','p06-06-'], 'calico-face-two':['cat crochet','p07-13-'],
 'calico-face-step-1':['cat crochet','p06-03-'],
 'calico-face-step-2':['cat crochet','p06-09-'],
 'calico-face-step-3':['cat crochet','p06-13-'],
 'calico-face-step-4':['cat crochet','p06-16-'],
 'calico-face-step-5':['cat crochet','p06-19-'],
 'calico-face-step-6':['cat crochet','p06-24-'],
 'calico-face-step-7':['cat crochet','p06-27-'],
 'calico-face-step-8':['cat crochet','p07-03-'],
 'calico-face-step-9':['cat crochet','p07-06-'],
 'calico-face-step-10':['cat crochet','p07-09-'],
 'calico-face-step-11':['cat crochet','p07-12-'],
 'calico-ears':['cat crochet','p07-16-'], 'calico-body-join':['cat crochet','p09-06-'],
 'calico-neck-wire':['cat crochet','p10-18-'], 'calico-seated-legs':['cat crochet','p11-03-'],
 'pumpkin-cat-head':['Pumpkin Cat Halloween','p03-02-'],
 'pumpkin-cat-face':['Pumpkin Cat Halloween','p06-02-'],
 'pumpkin-cat-pumpkin':['Pumpkin Cat Halloween','p07-02-'],
 'luna-head':['Witchy_Cat','p04-02-'], 'luna-arm':['Witchy_Cat','p05-03-'],
 'luna-body':['Witchy_Cat','p05-06-'], 'luna-skirt':['Witchy_Cat','p06-03-'],
 'luna-cloak':['Witchy_Cat','p07-06-'], 'luna-hat':['Witchy_Cat','p08-02-']
};
(async()=>{
 for(const [name,[folder,file]] of Object.entries(primary))await sharp(path.join(source,folder,file)).rotate().jpeg({quality:92}).toFile(path.join(assets,name+'.jpg'));
 for(const [name,[folder,prefix]] of Object.entries(figures)){
  const dir=path.join(extracted,folder),file=fs.readdirSync(dir).find(n=>n.startsWith(prefix)&&/\.(jpg|png)$/.test(n));
  if(!file)throw Error('Missing source figure: '+name+' '+prefix);
  await sharp(path.join(dir,file)).rotate().jpeg({quality:94}).toFile(path.join(assets,name+'.jpg'));
 }
 console.log('Imported '+Object.keys(primary).length+' project photos and '+Object.keys(figures).length+' source figures.');
})().catch(e=>{console.error(e);process.exit(1)});
