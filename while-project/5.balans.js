function balans (input){

    let totalSum=0;
    let index=0;
    let curRow=input[index];

    while (curRow!=="NoMoreMoney"){
        let rowAsNum=Number(curRow);
        if (rowAsNum<0){
            console.log(`Invalid operation!`);
            break;
        }
        console.log(`Increase: ${rowAsNum.toFixed(2)}`);
        totalSum+=rowAsNum;
        index++;
        curRow=input[index];
    
    }
console.log(`Total: ${totalSum.toFixed(2)}`);
}
balans (["5.51",  "69.42", "100", "NoMoreMoney"]);