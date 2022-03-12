const date = new Date();

const weekday = {'1': "Monday",
    '2': "Tuesday",
    '3': "Wednesday",
    '4': "Thursday",
    '5': "Friday",
    '6': "Saturday",
    '7': "Sunday",
}

const alltime = {
    hour: date.getHours(),
    minute: date.getMinutes(),
    day: weekday[date.getDay().toString()]
}

export default alltime;
