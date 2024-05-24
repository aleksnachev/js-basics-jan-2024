// •	На първия ред – N – броят дни  – цяло число в интервала [1...300]
// •	За всеки един ден на отделен ред:
// 	количество на ракията – реално число в интервала [1.00...500.00]
// 	градус на получената напитка - реално число в интервала [10.00...99.00]



function grandpa (input){

    let days = Number (input[0]);
    let letres=0;
    let degrees=0;
    let index=1;
    let row=Number (input[index]);
    
    for (let a=1 ; a<=days; a++){
    
        let letresNow=row;
        letres+=letresNow;
    
        index++;
        row=Number(input[index])
    
        let degreesNow=row*letresNow;
        degrees+=degreesNow;
    
        index++
        row=Number(input[index])
    
    
    }
    
//     •	Първи ред: "Liter: {общо литрите}"
// •	Втори ред: "Degrees: {градусите на общата смес}"
// •	Трети ред – да се отпечатва един от следните редове:
// 	"Not good, you should baking!" - ако градусът е по-малък от 38
// 	"Super!" - ако градусът е от 38 до 42
// 	"Dilution with distilled water!" - aко градусът е по-голям от 42
// Литрите и градусите да бъдат форматирани до втория знак след десетичната запетая.

    console.log(`Liter: ${letres.toFixed(2)}`);
    console.log(`Degrees: ${(degrees/letres).toFixed(2)}`);

    if ((degrees/letres) < 38){
        console.log("Not good, you should baking!");
    }else if ((degrees/letres) <= 42){
        console.log("Super!");
    }else {
       console.log("Dilution with distilled water!"); 
    }
    }
    grandpa (["3",
    "100",
    "45",
    "50",
    "55",
    "150",
    "36"]);
    