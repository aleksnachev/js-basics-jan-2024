function oscar(input){

let nameActor=input[0];
let pointsActor=Number(input[1]);
let numberJuri=Number (input[2]);
let result=0;
let finalResult=0;

for (let i=3; i<input.length; i+=2){
    let nameJuri=input[i];
    let bukviJuri=nameJuri.length;
    let resultJuri=(bukviJuri*(input[i+1]))/2;
    result +=resultJuri

    finalResult=result+pointsActor;
  
  if (finalResult>1250.5){
    console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${finalResult.toFixed(1)}!`);
    return;
  }
}
    let pointsNeeded=1250.5-finalResult
  console.log(`Sorry, ${nameActor} you need ${pointsNeeded.toFixed(1)} more!`);

}
oscar (["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])




