function exam (imput){

    let hourExam = Number(imput[0]);
    let minExam = Number(imput[1]);
    let hourArrive = Number(imput[2]);
    let minArrive = Number(imput[3]);

    let ttlMinExam = (hourExam * 60) + minExam;
    let ttlMinArrive = (hourArrive * 60) + minArrive;

    if(ttlMinExam >= ttlMinArrive){
        let timeEarly = ttlMinExam - ttlMinArrive;
        if( timeEarly === 0){
            console.log(`On time`);
        } else if(timeEarly > 0 && timeEarly <= 30){
            console.log(`On time`);
            console.log(`${timeEarly} minutes before the start`);
        } else {
            let hourEarly = Math.floor(timeEarly / 60);
            let minutiesEarly = Math.ceil(timeEarly % 60);
            if(hourEarly === 0){
                console.log(`Early`);
                console.log(`${minutiesEarly} minutes before the start`)
            } else {
                if(minutiesEarly <= 9){
                    console.log(`Early`);
                    console.log(`${hourEarly}:0${minutiesEarly} hours before the start`)
                } else {
                    console.log(`Early`);
                    console.log(`${hourEarly}:${minutiesEarly} hours before the start`)
                }
                
            }
         
        }
        
    } else {
        let timeLate = ttlMinArrive - ttlMinExam;
        if( timeLate > 0 && timeLate <= 59){
            console.log(`Late`);
            console.log(`${timeLate} minutes after the start`);
        } else {
            let hourLate = Math.floor(timeLate / 60);
            let minLate = Math.ceil(timeLate % 60);
            if(minLate <= 9){
                console.log(`Late`);
                console.log(`${hourLate}:0${minLate} hours after the start`);
            } else{
                console.log(`Late`);
                console.log(`${hourLate}:${minLate} hours after the start`);
            }
            
        }
    }

}
exam (["16",
"00",
"15",
"00"])
