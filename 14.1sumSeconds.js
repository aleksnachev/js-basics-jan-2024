function sumSeconds(input){

let sec1=Number(input[0]);
let sec2=Number(input[1]);
let sec3=Number(input[2]);

let allSec=sec1+sec2+sec3;

let min=Math.trunc(allSec/60);
let sec=allSec %60;

if (sec<10){
    console.log(`${min}:0${sec}`);
}else{
    console.log(`${min}:${sec}`);

}

}
sumSeconds (["22", "7", "34"]);