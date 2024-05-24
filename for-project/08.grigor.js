function grigor (input){

let tourCount=Number(input[0]);
let initialPoints=Number(input[1]);
let winCount=0;
let seasonPoints=0;

for (let i=2; i<tourCount+2; i++){
    let result=input[i];

    switch (result){
        case 'W':seasonPoints+=2000;
        winCount++;break;

        case 'F':seasonPoints+=1200;break;

        case 'SF':seasonPoints+=720;break;
    }
}

console.log(`Final points: ${initialPoints+seasonPoints}`);
let avgPoints=seasonPoints/tourCount;
console.log(`Average points: ${Math.floor(avgPoints)}`);
let winPercent=(winCount/tourCount)*100;
console.log(`${winPercent.toFixed(2)}%`);
}
grigor (["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"]);
