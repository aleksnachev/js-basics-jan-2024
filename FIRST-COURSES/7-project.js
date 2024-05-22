function project (imput){

let name = imput[0];
let projectbr = Number(imput[1]);
let timeproject = projectbr * 3;

console.log(`The architect ${name} will need ${timeproject} hours to complete ${projectbr} project/s.`)

}
project(["George ", "4 "])
