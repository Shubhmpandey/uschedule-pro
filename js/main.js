//main js module

import alltime from './timemachine.js';

let updateTime = () => {

    let hours = document.querySelector(".current-hours");
    let minute = document.querySelector(".current-minutes");
    let weekday = document.querySelector(".current-weekday");
    hours.innerHTML = alltime.hour;
    minute.innerHTML = alltime.minute;
    weekday.innerHTML = alltime.day;
    
}

updateTime();