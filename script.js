/*
    Define a function that converts a time in 
    24 hour notation to military time
*/
const convertToMilitaryTime = time => {
    time = time.split(':');

    let hours = Number(time[0]);
    let minutes = Number(time[1]);
    let seconds = Number(time[2]);

    let militaryTime;
    if (hours > 0 && hours <= 12) {
        militaryTime = `${hours}`;
    } else if (hours > 12) {
        militaryTime = `${(hours - 12)}`;
    } else if (hours === 0) {
        militaryTime = '12';
    }

    militaryTime += (minutes < 10) ? `:0${minutes}` : `:${minutes}`;
    militaryTime += (seconds < 10) ? `:0${seconds}` : `:${seconds}`;
    militaryTime += (hours >= 12) ? ' PM' : ' AM';

    return militaryTime;
};

// Store a reference to the clock and the toggle switch in a variable
const clock = document.querySelector('#clock');
const toggleSwitch = document.querySelector('#time-notation-switch');

/*
    Define a function that displays the current time and changes its format
    depending on the state (checked or unchecked) of the toggle switch
*/
const showTime = () => {
    let date = new Date();
    let time = (!toggleSwitch.checked) ? date.toLocaleTimeString() : convertToMilitaryTime(date.toLocaleTimeString());
    clock.textContent = time;

    setTimeout(showTime, 1000);
};

showTime();