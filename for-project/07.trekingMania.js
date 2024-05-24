// •	Първи ред - процентът изкачващи Мусала
// •	Втори ред – процентът изкачващи Монблан
// •	Трети ред – процентът изкачващи Килиманджаро
// •	Четвърти ред – процентът изкачващи К2
// •	Пети ред – процентът изкачващи Еверест

// •	Група до 5 човека – изкачват Мусала
// •	Група от 6 до 12 човека – изкачват Монблан
// •	Група от 13 до 25 човека – изкачват Килиманджаро
// •	Група от 26 до 40 човека –  изкачват К2
// •	Група от 41 или повече човека – изкачват Еверест


function treckingMania (input){

let groups=Number(input[0]);
let countMusala=0;
let countMonblan=0;
let countKilimandzaro=0;
let countK2=0;
let countEverest=0;
let climbersCount=0;

for (let i=1; i<groups+1; i++){
    let climbers=Number(input[i]);

    if (climbers<=5){
        countMusala += climbers;
    }else if (climbers>=6 && climbers<=12){
        countMonblan += climbers;
    }else if (climbers>=13 && climbers<=25){
        countKilimandzaro += climbers;
    }else if (climbers>=26 && climbers<=40){
        countK2 += climbers;
    }else if (climbers>=41){
        countEverest+=climbers;
    }
    
climbersCount+=climbers;

}

console.log (`${(countMusala/climbersCount*100).toFixed(2)}%`);
console.log (`${(countMonblan/climbersCount*100).toFixed(2)}%`);
console.log (`${(countKilimandzaro/climbersCount*100).toFixed(2)}%`);
console.log (`${(countK2/climbersCount*100).toFixed(2)}%`);
console.log (`${(countEverest/climbersCount*100).toFixed(2)}%`);


}
treckingMania (["10","10","5","1","100","12","26","17","37","40","78"])

