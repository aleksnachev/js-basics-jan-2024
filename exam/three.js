// •	"room for one person" – 18.00 лв за нощувка
// •	"apartment" – 25.00 лв за нощувка 
// •	"president apartment" – 35.00 лв за нощувка
// вид помещение	        по-малко от 10 дни	        между 10 и 15 дни	        повече от 15 дни
// room for one person	    не ползва намаление	        не ползва намаление	        не ползва намаление
// apartment	            30% от крайната цена	    35% от крайната цена	    50% от крайната цена
// president apartment	    10% от крайната цена	    15% от крайната цена	    20% от крайната цена


// •	Първи ред – дни за престой – цяло число в интервала [0...365]
// •	Втори ред –  вид помещение –  "room for one person",  "apartment" или "president apartment"
// •	Трети ред –  оценка - "positive"  или "negative"

function santa (input){

let days=Number (input[0])
let nights=days-1

let room=input[1];
let feedback=input[2];
let sum=0;

switch (room){

    case "room for one person":
        sum=nights*18;break;
    case "apartment":
        sum=nights*25;

        if (days<10){
            sum*=0.7
        }else if (days <= 15){
            sum*=0.65
        }else {
            sum*=0.5;
        }
        break;
    case "president apartment":
        sum=nights*35;

        if (days<10){
            sum*=0.9
        }else if (days <= 15){
            sum*=0.85
        }else {
            sum*=0.8;
        }
        break;
}

if (feedback=== "positive"){
    sum*=1.25;
}else if (feedback==="negative"){
    sum*=0.9
}

console.log(sum.toFixed(2));
}
santa (["14",
"apartment",
"positive"]);
