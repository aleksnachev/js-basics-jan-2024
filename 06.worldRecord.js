function worldRecord(input){
    
    let record=Number(input[0]);
    let meeters=Number (input[1]);
    let mInSec=Number(input[2]);

    let ivanScore=meeters*mInSec;
    let ivanScore2=(Math.floor(meeters/15))*12.5 + ivanScore;

    if (ivanScore2<record){
        console.log(`Yes, he succeeded! The new world record is ${ivanScore2.toFixed(2)} seconds.`);
    }else {
            let secNeeded=ivanScore2-record;
        console.log(`No, he failed! He was ${secNeeded.toFixed(2)} seconds slower.`);
    }
    

}
worldRecord (["55555.67", "3017","5.03"])