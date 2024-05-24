function library (input){

let bookSearched=input[0];
let boooksChecked=0;
let index=1;
let command=input[index];
index++;

while (command !== "No More Books"){
    if (command===bookSearched){
        console.log(`You checked ${boooksChecked} books and found it.`);
        break;
    }
    boooksChecked++;
    command=input[index];
    index++;
}

if (command==="No More Books"){
    console.log('The book you search is not here!');
    console.log(`You checked ${boooksChecked} books.`);
}


}
library (["Troy", "Stronger", "Life Style", "Troy"]);