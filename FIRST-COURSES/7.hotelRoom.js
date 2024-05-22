// За апартамент, при повече от 14 нощувки, без значение от месеца : 10% намаление.

// May, June, July, August, September или October
function hotelRoom (input){

let month=input[0];
let nights=Number (input[1]);

let priceStudio=0;
let priceApartament=0;

switch (month){

    case 'May': 
        priceStudio=50*nights;
        priceApartament=65*nights;

        if (nights>7 && nights<=14){
            priceStudio*=0.95;
        }else if (nights>14){
            priceStudio*=0.7;
        }

        if (nights>14){
            priceApartament*=0.9;
        }
        break;
    case "June":
        priceStudio=75.2*nights;
        priceApartament=68.7*nights;

        if (nights>14){
            priceStudio*=0.8
        }
        if (nights>14){
            priceApartament*=0.9;
        }
        break;
    case 'July':
        priceStudio=76*nights;
        priceApartament=77*nights;
        if (nights>14){
            priceApartament*=0.9;
        }
        break;
    case 'August':
        priceStudio=76*nights;
        priceApartament=77*nights;
        if (nights>14){
            priceApartament*=0.9;
        }
        break;
    case 'September':
        priceStudio=75.2*nights;
        priceApartament=68.7*nights;

        if (nights>14){
            priceStudio*=0.8
        }
        if (nights>14){
            priceApartament*=0.9;
        }
        break;
    case 'October':
        priceStudio=50*nights;
        priceApartament=65*nights;

        if (nights>7 && nights<=14){
            priceStudio*=0.95
        }else if (nights>14){
            priceStudio*=0.7;
        }
        if (nights>14){
            priceApartament*=0.9;
        }
        break;
}
    
console.log(`Apartment: ${priceApartament.toFixed(2)} lv.`);
console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
}
hotelRoom (["June", "14"])