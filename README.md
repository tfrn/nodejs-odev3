# nodejs-odev3
patika.dev node.js dersi 3. ödevi

circle.js dosyası;
```js
pi=3.14;
exports.alanHesaplama=(r)=>{
    let daireninalani = pi*Math.pow(r,2);
    console.log("dairenin alanı : "+daireninalani);
}
exports.cevreUzunlugu=(r)=>{
    let dairenincevresi = 2*pi*r;
    console.log("dairenin çevresi : "+dairenincevresi);
}
```
index.js dosyası;
```js
let circle = require("./circle");
let r = 5;
circle.alanHesaplama(r);
circle.cevreUzunlugu(r);
```