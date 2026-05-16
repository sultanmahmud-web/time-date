function ampm(h) {
    if(h <= 11 ) {
        return 'AM';
    } else {
        return 'PM';
    }
}
function Zero(n = 0) {
    if(n < 10) {
        return `0${n}`
    } else return n;
}
// function d_Zero(n = 0) {
//     if(n < 10) {
//         return `00${n}`
//     } else(n < 10) {
//         return `0${n}`
//     } else return n;
// }

function hour_ampm(hours) {
    if(hours>12) {
        return hours - 12;
    } else if(hours == 0) {
        return 12;
    } else return hours;
}

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
var months = ['January','February','March','April','May','June','July','August','September','October','November','December']

setInterval(function(){
    
    var output = {
        day     : Zero( days[new Date().getDay()] ),
        date    : Zero( new Date().getDate() ),
        month   : Zero( months[new Date().getMonth()] ),
        year    : Zero( new Date().getFullYear() ),
        hours   : Zero( hour_ampm ( new Date().getHours() ) ),
        minutes : Zero( new Date().getMinutes() ),
        seconds : Zero( new Date().getSeconds() ),
        ms      : Zero( new Date().getMilliseconds() ),
    }

    var fullDate = `${output.date} ${output.month}, ${output.year}`;
    var fullTime = `${output.hours}:${output.minutes}:${output.seconds} <span>${ampm(output.hours)}</span>`;


    document.getElementById('time').innerHTML = fullTime;
    document.getElementById('date').innerHTML = fullDate;
    document.getElementById('day').innerHTML = output.day;
}, 1)
