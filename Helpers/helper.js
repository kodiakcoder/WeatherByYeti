

const convertTimestampTime =(timestamp) => {
    var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
        yyyy = d.getFullYear(),
        mm = ('0' + (d.getMonth() + 1)).slice(-2),  // Months are zero based. Add leading 0.
        dd = ('0' + d.getDate()).slice(-2),         // Add leading 0.
        hh = d.getHours(),
        h = hh,
        min = ('0' + d.getMinutes()).slice(-2),     // Add leading 0.
        ampm = 'AM',
        time;

    if (hh > 12) {
        h = hh - 12;
        ampm = 'PM';
    } else if (hh === 12) {
        h = 12;
        ampm = 'PM';
    } else if (hh == 0) {
        h = 12;
    }

    // ie: 2014-03-24, 3:00 PM
    //time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;
    time = h + ':' + min + ' ' + ampm;
    //time =  dd + ', ' + h + ':' + min + ' ' + ampm;

    return time;
}



const convertTimestampDate =(timestamp) => {
    var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
        yyyy = d.getFullYear(),
        mm = ('0' + (d.getMonth() + 1)).slice(-2),  // Months are zero based. Add leading 0.
        dd = ('0' + d.getDate()).slice(-2),         // Add leading 0.
        hh = d.getHours(),
        h = hh,
        min = ('0' + d.getMinutes()).slice(-2),     // Add leading 0.
        ampm = 'AM',
        time;

    if (hh > 12) {
        h = hh - 12;
        ampm = 'PM';
    } else if (hh === 12) {
        h = 12;
        ampm = 'PM';
    } else if (hh == 0) {
        h = 12;
    }

    // ie: 2014-03-24, 3:00 PM
    time = yyyy + '-' + mm + '-' + dd //+ ', ' + h + ':' + min + ' ' + ampm;
    //time = h + ':' + min + ' ' + ampm;
    //time =  dd + ', ' + h + ':' + min + ' ' + ampm;

    return time;
}


const getCurrentDay = () =>{
    const d = new Date();
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    const day = weekday[d.getDay()];
    return day;
}

const getThisDay = (dayNumber) =>{
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    const day = weekday[dayNumber];
    return day;
}


const getChartData = (dailyArray) =>{

    const chartData = []

    dailyArray.map(chartItem => chartData.push(Math.floor(chartItem.temp - 273.15)))
    return chartData
}

const getWeeklyChartData = (weeklyArray) =>{
    const chartData = []

    weeklyArray.map(currItem=> chartData.push(currItem.temp.day - 273.15))

    return chartData;
}


const makeIconData = (weeklyArray) =>{
    const iconData = []

    weeklyArray.map(currData => {
       const currDate = convertTimestampDate(currData.dt)
       const tempDate = new Date(currDate);
       const day = getThisDay(tempDate.getDay()).slice(0,1)
        const tempobj = {
            id:iconData.length,
            day:day,
            weather:currData.weather[0].main
        }
        iconData.push(tempobj)
    })
    return iconData
}

export {
    convertTimestampTime,
    convertTimestampDate,
    getCurrentDay,
    getChartData,
    getWeeklyChartData,
    makeIconData
};