function comb (input){

let num=Number(input[0]);
let counterComb=0;

for (let first=0; first<=num; first++){
    for (let sec=0; sec<=num; sec++){
        for (let last=0; last<=num; last++){
            let sum=first+sec+last;
                if (sum === num){
                    counterComb++
                }
        }
    }
}
console.log(counterComb);
}
comb (["25"]);