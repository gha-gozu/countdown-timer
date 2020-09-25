const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const secs = document.getElementById("secs");

function countdown() {
    const newYearDate = new Date(new Date().getFullYear() + 1, 0, 1);
    const currentDate = new Date();

    const diff = Math.floor((newYearDate - currentDate) / 1000);
    const secDiff = Math.floor(diff % 60);
    const minDiff = Math.floor((diff / 60) % 60);
    const hourDiff = Math.floor((diff / 3600) % 24);
    const dayDiff = Math.floor(diff / 3600 / 24);

    days.innerHTML = formatTime(dayDiff);
    hours.innerHTML = formatTime(hourDiff);
    mins.innerHTML = formatTime(minDiff);
    secs.innerHTML = formatTime(secDiff);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);
