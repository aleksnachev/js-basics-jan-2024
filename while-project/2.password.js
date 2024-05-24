function pass (input){

    let user=input[0];
    let pass=input[1];
    let index=2;
    let currentWord=input[index];

    while (currentWord!==pass){
        index++;
        currentWord=input[index];
    }
    console.log(`Welcome ${user}!`);

}
pass (["Nakov", "1234", "Pass", "1324", "1234"]);