//Analogic Clock
function clock(){
    const sec = document.getElementById('sec');
    const min = document.getElementById('min');
    const hour = document.getElementById('hour');  

    let date = new Date();

    let s = date.getSeconds();
    let m = date.getMinutes();
    let h = date.getHours();

    sec.style.transform = `translate(0,-50%) rotate(calc(${s}*6deg))`;

    min.style.transform = `translate(0,-50%) rotate(calc(${m}*6deg))`;

    hour.style.transform = `translate(0,-50%) rotate(calc(${h}*30deg))`; 
    
}

const clockUpdate = setInterval(clock,1000);

//Digital Clock
function digitalClock(){
    let DigitalSec = document.getElementById('digital-sec');
    let DigitalMin = document.getElementById('digital-min');
    let DigitalHour = document.getElementById('digital-hour'); 

    let date = new Date();

    let second = date.getSeconds();
    let minute = date.getMinutes();
    let hours = date.getHours();

    if(second<9){
        second = "0" +second;
    }

    if(minute<9){
        minute = "0" +minute;
    }

    if(hours<9){
        hours = "0" +hours;
    }

    DigitalSec.textContent = second;
    DigitalMin.textContent = minute;
    DigitalHour.textContent = hours;
}

const dclockUpdate = setInterval(digitalClock,1000);