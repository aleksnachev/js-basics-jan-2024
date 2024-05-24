function sum(input){
    let targetNumber = Number(input[0]);
    let sum=0;
    let index=1;
    let curNum=Number(input[index]);
    
    while (sum< targetNumber){
        sum+=curNum;
        index++;
        curNum=Number (input[index]);
    }
    console.log(sum);
}
sum  (["100", "10", "20", "30", "40"])