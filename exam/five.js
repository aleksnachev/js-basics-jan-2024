// •	Подстригване (haircut):
// o	  Мъжко (mens) - 15лв.
// o	  Дамско (ladies) – 20лв.
// o	  Детско (kids) – 10лв.
// •	Боядисване (color):
// o	  Поддръжка (touch up) – 20лв.
// o	  Пълно боядисване (full color) – 30лв.

// •	цел за деня – цяло число в интервала [1 … 5000]
// След това се четат поредица от редове до получаване на команда "closed" или докато Деси не постигне целта за деня – услугата, която иска клиентът – текст с възможности "haircut" и "color". 
// При команда "haircut" ще се очаква да се въведе видът на подстригването – "mens", "ladies" или "kids".
// При команда "color" ще се очаква видът на боядисването – "touch up" или "full color".

// Деси ще приема клиенти докато не приключи работния ден. Ако постигне желания приход обаче, тя ще затвори салона. 
function five (input){

let goal=Number (input[0]);
let index=1;
let row=input[index];
let money=0;

while (row !== "closed"){
    switch (row){
        case "haircut":
            index++
            row=(input[index])
            if (row=== "mens"){
                money+=15
            }else if(row === "ladies"){
                money+=20;
            }else if(row==="kids"){
                money+=10
            }
            break;
        case "color":
            index++
            row=(input[index])
            if (row === "touch up"){
                money+=20
            }else if (row === "full color"){
                money+=30
            }
            break;
    }
    if (money >= goal){
        break;
    }else { index++
        row=(input[index])
    }
   

}
// •	На първия ред:
// o	Ако Деси е успяла да постигне целта за деня:
// "You have reached your target for the day!" 
// o	Ако Деси не е успяла да постигне целта за деня:
// "Target not reached! You need {колко пари не и достигат, за да стигне целта}lv. more."
// •	На втория ред:
// 	"Earned money: {парите, които е спечелила за деня}lv."

if (money>=goal){
    console.log("You have reached your target for the day!" );
}else {
    console.log(`Target not reached! You need ${goal-money}lv. more.`);
}

console.log(`Earned money: ${money}lv.`);

}
five (["300",
"haircut",
"ladies",
"haircut",
"kids",
"color",
"touch up",
"closed"]);
