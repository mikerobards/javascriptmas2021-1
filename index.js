const countdownDisplay = document.getElementById("countdown-display")
const button = document.getElementById("btn")
const xmas2021 = new Date('Dec 25 2021')
const newDateValue = document.getElementById("start")
const newEventName = document.getElementById("event")

button.addEventListener('click', setDate)

function setDate() {
    const newDate = new Date(newDateValue.value)
    const newEvent = newEventName.value
    renderCountdown(newDate, newEvent)
}

function convertMiliseconds(miliseconds, format) {
    let days,
        hours,
        minutes,
        seconds,
        total_hours,
        total_minutes,
        total_seconds

    total_seconds = parseInt(Math.floor(miliseconds / 1000))
    total_minutes = parseInt(Math.floor(total_seconds / 60))
    total_hours = parseInt(Math.floor(total_minutes / 60))
    days = parseInt(Math.floor(total_hours / 24))

    hours = parseInt(total_hours % 24);
    minutes = parseInt(total_minutes % 60);
    seconds = parseInt(total_seconds % 60);

    switch (format) {
        case 's':
            return total_seconds;
        case 'm':
            return total_minutes;
        case 'h':
            return total_hours;
        case 'd':
            return days;
        default:
            return { d: days, h: hours, m: minutes, s: seconds };
    }
}

// Shout out to flangofas for this millisecond function!

function renderCountdown(date, eventName) {
    const christmas = 25
    // Task:
    // - Get today's date (you only need the day).
    // - Calculate remaining days.
    // - Display remaining days in countdownDisplay.
    const timeElapsed = Date.now()
    const today = new Date(timeElapsed)
    const daysUntilChristmas = christmas - today.getDate()

    let timeBetween = date - today
    let dhms = convertMiliseconds(timeBetween, 'dhms')
    console.log(convertMiliseconds(timeBetween, 'dhms'))
    countdownDisplay.textContent = `${dhms.d} Days, ${dhms.h} Hours, ${dhms.m} Minutes, ${dhms.s} Seconds \n 'til ${eventName}!`
}

renderCountdown(xmas2021, "Christmas")





// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.

