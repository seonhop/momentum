const clockText = document.querySelector(".clock-text");

function getClock() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");

    clockText.innerText = `${hour}:${min}`;
}

getClock();
setInterval(getClock, 1000);
