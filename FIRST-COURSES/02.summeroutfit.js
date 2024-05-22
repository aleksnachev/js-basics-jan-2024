
// "Morning", "Afternoon", "Evening"
function outfit (input) {

let degrese=Number (input[0]);
let partOfDay=input [1];

let outfit='';
let shoes='';

switch (partOfDay){

    case 'Morning':
        if (degrese <= 18){
            outfit = "Sweatshirt";
            shoes = 'Sneakers';
        }else if (degrese <= 24){
            outfit = "Shirt";
            shoes = "Moccasins";
        }else {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
        break;

    case "Afternoon" :
        if (degrese <= 18){
            outfit = "Shirt";
            shoes = 'Moccasins';
        }else if (degrese <= 24){
            outfit = "T-Shirt";
            shoes = "Sandals";
        }else {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        }
        break;
    
    case "Evening":
        outfit = "Shirt";
        shoes = "Moccasins";
        break;
}
    console.log(`It's ${degrese} degrees, get your ${outfit} and ${shoes}.`);
}
outfit (["16","Morning"])
