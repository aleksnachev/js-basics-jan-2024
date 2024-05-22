function depositCal(imput) {

let depositSum=Number(imput[0]);
let srok=Number(imput[1]);
let persent=Number(imput[2]);
let persent1=persent/100;

let sum=depositSum+srok*((depositSum*persent1)/12);

console.log(sum);

}
depositCal(["200", "3", "5.7"]);
