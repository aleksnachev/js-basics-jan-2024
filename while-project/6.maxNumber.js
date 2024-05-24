function maxNumber (imput) {

    let maxNumber = -9999999999999;
    let index = 0;
    let curNum = imput[index];

    while (curNum !== 'Stop'){
        let rowAsNum = Number(curNum);

        if (rowAsNum > maxNumber) {
            maxNumber = rowAsNum;
        }
        index++;
        curNum = imput[index];
    }
    console.log (maxNumber);
}
maxNumber(["100",
"99",
"80",
"70",
"Stop"]);
