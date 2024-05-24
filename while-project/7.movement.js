function movement (input){

    let width=Number (input[0]);
    let lenght=Number(input[1]);
    let height=Number(input[2]);

    let totalVolume=width*lenght*height;

    let index=3;
    let command=input[index]
    index++;

    while (command !== 'Done'){

        let boxesCount=Number(command);
        totalVolume-=boxesCount;

        if (totalVolume<=0){
            console.log(`No more free space! You need ${Math.abs(totalVolume)} Cubic meters more.`);
            break;
        }

        command=input[index];
        index++;
    }

if (command==="Done"){
    console.log(`${totalVolume} Cubic meters left.`);
}

}
movement (["10",  "1", "2", "4",  "6", "Done"])