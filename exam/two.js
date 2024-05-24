// 1.	Цена на моминското парти - реално число в интервала [1.00 … 10000.00]
// 2.	Брой любовни послания - цяло число в интервала [0… 1000]
// 3.	Брой восъчни рози - цяло число в интервала [0 … 1000]
// 4.	Брой ключодържатели - цяло число в интервала [0 … 1000]
// 5.	Брой карикатури - цяло число в интервала [0 … 1000]
// 6.	Брой късмети изненада - цяло число в интервала [0 … 1000]
;;;;;;;;;;;;;;;;
// •	Любовно послание - 0.60 лв.
// •	Восъчна роза - 7.20 лв.
// •	Ключодържател - 3.60 лв.
// •	Карикатура - 18.20 лв.
// •	Късмет изненада - 22 лв.

function two (input){


    let partysum=Number(input[0]);

    let sum=Number(input[1])*0.6 + Number(input [2])*7.2 + Number (input[3])*3.6 + Number (input[4])*18.2 + Number (input[5])*22;
    
    let counter=Number(input[1])+ Number (input[2])+Number (input[3])+Number (input[4])+Number (input[5]);
    
    if (counter >= 25){
        sum *= 0.65;
    }
    let money = sum*0.9;

    if (money < partysum){
        console.log(`Not enough money! ${(partysum-money).toFixed(2)} lv needed.`);
    }else if (money >= partysum){
        console.log(`Yes! ${(money-partysum).toFixed(2)} lv left.`);
    }

}
two (["40.8",
"20",
"25",
"30",
"50",
"10"]);
