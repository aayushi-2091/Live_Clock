let a;
let date,hour, minutes,sec;
const day={weekday:'long'};
setInterval(() => {
  a=new Date();
  date=a.toLocaleDateString(undefined,day);
  hour=a.getHours();
  minutes=a.getMinutes();
  sec=a.getSeconds();
document.getElementById('day').innerHTML=date;
document.getElementById('hour').innerHTML=hour;
document.getElementById('min').innerHTML=minutes;
document.getElementById('sec').innerHTML=sec;

}, 1000);   