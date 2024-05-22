
function trade(input){

    let city=input[0];
    let sales=Number(input[1]);
    let comission=0;

        if (city === "Sofia") {
            if (sales >= 0 && sales <= 500){
            comission=0.05*sales;
            console.log(comission.toFixed(2));
        }
        else if(sales > 500 && sales <=1000){
            comission=0.07*sales;
            console.log(comission.toFixed(2));
        }
        else if(sales > 1000 && sales <= 10000){
            comission=0.08*sales;
            console.log(comission.toFixed(2));
        }
        else if (sales>10000){
            comission=0.12*sales;
            console.log(comission.toFixed(2));
}else{
    console.log("error")
}

    }else if (city === "Varna"){
if (sales >= 0 && sales <= 500){
comission=0.045*sales;
console.log(comission.toFixed(2));
}else if(sales > 500 && sales <=1000){
comission=0.075*sales;
console.log(comission.toFixed(2));
}else if(sales > 1000 && sales <= 10000){
comission=0.1*sales;
console.log(comission.toFixed(2));
}else if (sales>10000){
comission=0.13*sales;
console.log(comission.toFixed(2));
}else{
    console.log("error")
}

    }else if(city === "Plovdiv"){
if (sales >= 0 && sales <= 500){
comission=0.055*sales;
console.log(comission.toFixed(2));
}else if(sales > 500 && sales <= 1000){
comission=0.08*sales;
console.log(comission.toFixed(2));
}else if (sales > 1000 && sales <= 10000){
comission=0.12*sales;
console.log(comission.toFixed(2));
}else if(sales>10000){
comission=0.145*sales;
console.log(comission.toFixed(2));
}else{
    console.log("error");
}

}else{
    console.log("error")
}


}
trade (["Plovdiv", "-20"])