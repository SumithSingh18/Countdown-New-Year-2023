const newYears = '1 Jan 2025';


function countdown() {

    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    // let totalMonth = currentDate.getMonth();
    
    // const months = 11 - totalMonth;
    const totalSeconds = (newYearDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    // document.getElementById('month').innerHTML = formatTime(months)
    document.getElementById('days').innerHTML = formatTime(days);
    document.getElementById('hours').innerHTML = formatTime(hours);
    document.getElementById('minutes').innerHTML = formatTime(minutes)
    document.getElementById('seconds').innerHTML = formatTime(seconds)

}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

//initial call
countdown();

setInterval(countdown, 1000);
