function zoo(imput){

    let dogsOpak = Number(imput[0]);
    let catsOpak = Number(imput[1]);
    let dogsPrice = dogsOpak * 2.5;
    let catsPrice = catsOpak * 4;

    let sum = dogsPrice + catsPrice;

    console.log (` ${sum} lv.`);

}
zoo (["5 ", "4 "]);
