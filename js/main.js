'use strict';

let doc = document;   

let countdown = doc.querySelector('.countdown');

// set date (ms)
let launchDate = new Date('Aug 12, 2018 12:00:00').getTime();

// update every second
let intrvl = setInterval(() => {
    // get time now (ms)
    let now = new Date().getTime();

    // from now to the launch date
    let distance = launchDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / (1000));

    // show result
    countdown.innerHTML = `
        <div>${days}<span>Days<span/></div>
        <div>${hours}<span>Hours<span/></div>
        <div>${mins}<span>Minutes<span/></div>
        <div>${seconds}<span>Seconds<span/></div>     
    `;

    // launch date check
    if(distance < 0) {
        // stop countdown
        clearInterval(intrvl);
        // output text
        countdown.style.color = '#17a2b8';
        countdown.innerHTML = 'Launched!';
    }


}, 1000);


