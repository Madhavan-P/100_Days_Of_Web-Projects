const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

function currentDate(){
    const d = new Date();
    let date = d.getDate();
    const day = d.getDay();
    const month = d.getMonth();
    const year = d.getFullYear();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    if(hours > 12){
        hours = hours-12;
        hours = '0'+ hours;
    }
    else {
        hours = '0'+ hours;
    }

    if(minutes < 10) {
        minutes = '0'+ minutes;
    }

    if(seconds < 10) {
        seconds = '0'+ seconds;
    }

    if(date < 10) {
        date = '0'+ date;
    }

    document.getElementById('hrs').innerHTML = hours;
    document.getElementById('mins').innerHTML = minutes;
    document.getElementById('secs').innerHTML = seconds;
    document.getElementById('date').innerHTML = date;
    document.getElementById('day').innerHTML = days[day];
    document.getElementById('month').innerHTML = months[month];
    document.getElementById('year').innerHTML = year;
}



setInterval(currentDate, 1000);