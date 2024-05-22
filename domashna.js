function hello(input){
 
    let radiants=Number(input[0]);
    let gradus=radiants*180/Math.PI;
    console.log(gradus);
}
hello(["3.1416"]);