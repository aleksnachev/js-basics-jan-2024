function num (input){

   let factor2=Number(input[0]);

   for (let factor1=1; factor1<=10; factor1++){
    console.log(`${factor1} * ${factor2} = ${factor1*factor2}`);
   }

}
num ([5]);