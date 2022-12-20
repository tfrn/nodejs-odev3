pi=3.14;
exports.alanHesaplama=(r)=>{
    let daireninalani = pi*Math.pow(r,2);
    console.log("dairenin alanı : "+daireninalani);
}
exports.cevreUzunlugu=(r)=>{
    let dairenincevresi = 2*pi*r;
    console.log("dairenin çevresi : "+dairenincevresi);
}