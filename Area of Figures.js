function hello(input){

let figure=input[0];
let area=0;

if(figure==='square'){

    let a=Number(input[1]);
    area=a*a;
}else if (figure==='rectangle'){
    let a=Number(input[1]);
    let b=Number(input[2]);
    area=a*b;
}else if (figure === 'circle'){
    let a=Number(input[1]);
    area=Math.PI*a*a;
}else if (figure === 'triangle'){
    let a=Number(input[1]);
    let b=Number(input[2]);
    area=(a*b)/2;

}




console.log(area.toFixed(3));
}
hello (["triangle", "4.5", "20"]);