function green(imput){

let greenMetri = Number(imput[0]);

let priceGreen = greenMetri * 7.61;
let priceGreendiscount = 0.18 * priceGreen;
let ttlPrice = priceGreen - priceGreendiscount;

console.log (`The final price is: ${ttlPrice} lv.`);
console.log (`The discount is: ${priceGreendiscount} lv.`);

}
green (["550"]);
