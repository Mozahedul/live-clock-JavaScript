const clock = setInterval(showTime, 1000);

function showTime() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let am_pm = 'AM';

  if (hours >= 12) {
    hours -= 12;
    am_pm = 'PM';
  }
  if (hours === 0) {
    hours = 12;
  }

  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  document.getElementById(
    'timeShow',
  ).innerText = `TIME: ${hours}:${minutes}:${seconds} ${am_pm}`;
}

showTime();

function stopClock() {
  clearInterval(clock);
}
