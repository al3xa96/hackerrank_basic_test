
function timeConversion(s) {
    // Write your code here
    let time = '';
    let hour = parseInt(s.substring(0,2))
    if (s.includes('AM')){
        time = s.replace('AM','');
        if (hour == 12) hour = '00'
    }
    if (s.includes('PM')) {
        time = s.replace('PM','');
        if (hour !== 12) hour += 12
        console.log(`${hour}${time.substring(2)}`)
    }
       return `${(hour < 10 && hour !== '00') ? '0' + hour : hour}${time.substring(2)}`
}
module.exports = timeConversion;