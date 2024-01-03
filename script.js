const countDownDate = new Date("Jan 05, 2024 23:32:06").getTime();
setInterval(function () {

    const now = new Date().getTime();
    const tick = document.getElementById('tick');
    const distance = countDownDate - now;

    if (distance < 1000) {
        window.alert("SLAP INCOMING");
        open(location, '_self').close();
    } else {
        tick.play();
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000);
const w = document.getElementsByClassName('icon')[0];
w.style.fontSize = "20px";
setInterval(function () {
    if (w.style.fontSize === "20px") {
        w.style.fontSize = "22px";
        w.style.margin = "0.5px";
    } else if (w.style.fontSize === "22px") {
        w.style.fontSize = "24px";
        w.style.margin = "0px";
    } else if (w.style.fontSize === "23px") {
        w.style.fontSize = "21px";
        w.style.margin = "0.75px";
    } else if (w.style.fontSize === "24px") {
        w.style.fontSize = "23px";
        w.style.margin = "0.25px";
    } else {
        w.style.margin = "1px";
        w.style.fontSize = "20px";
    }
}, 150);



