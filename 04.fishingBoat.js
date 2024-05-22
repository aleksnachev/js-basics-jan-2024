
// 	"room for one person" – 18.00 лв за нощувка
// 	"apartment" – 25.00 лв за нощувка 
// 	"president apartment" – 35.00 лв за нощувка
function ski (input){

let nights=Number(input[0])-1;
let days=Number(input[0]);
let type=input[1];
let feedback=input[2];
let price=0;

switch (type){

    case 'room for one person':
        price=nights*18;
        break;

    case "apartment":
        price=nights*25;
            if (days<10){
                price *= 0.7;
            }else if(days<=15){
                price *= 0.65;
            }else{
                price *=0.5;
            }
            break;

    case "president apartment":
        price=nights*35;
            if(days<10){
                price *= 0.9;
            }else if(days<=15){
                price *=0.85;
            }else{
                price *=0.8;
            }
            break;
}

if (feedback=== "positive"){
    price *= 1.25;
}else if (feedback==="negative"){
    price*=0.9;
}

console.log(price.toFixed(2));
}
ski (["12",
"room for one person",
"positive"])

