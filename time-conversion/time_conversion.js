function timeConversion(s) {
    let hours = s.slice(0,2);
    let minutes = s.slice(2,8);
    let format = s.slice(8,10);
    
    if(format == "AM" && hours == "12"){
        hours = "00";
    } else if(format == "PM" && hours < 12){
        hours = parseInt(hours) + 12;
    }
    
    return hours+minutes;
}

time = "07/05/45PM";

console.log(timeConversion(time));