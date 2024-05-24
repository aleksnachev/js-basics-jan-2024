// •	На първи ред: цената в долари за процесора – реално число в интервала [200.00 … 3000.00]
// •	На втори ред: цената в долари за видео карта – реално число в интервала [100.00 … 1500.00]
// •	На трети ред: цената в долари за една RAM памет – реално число в интервала [80.00 ... 500.00]
// •	На четвърти: ред брой RAM памети – цяло число в интервала [1 ... 4]
// •   На пети ред: процент отстъпка – реално число в интервала [0.01 … 0.1]

function one (input){

    let procesorPrice=Number (input[0]) * 1.57;
    let videokardPrice=Number (input[1]) * 1.57;
    let oneRamPrice=Number (input[2]) *1.57;
    let countRam=Number (input[3]);
    let discountperecnt=Number (input[4]);

    let procesor=procesorPrice - procesorPrice*discountperecnt;
    let videokard=videokardPrice- videokardPrice*discountperecnt;
    let ram=oneRamPrice*countRam;

    let sum=procesor+videokard+ram;

    console.log(`Money needed - ${sum.toFixed(2)} leva.`);




}
one (["500",
"200",
"80",
"2",
"0.05"]);
