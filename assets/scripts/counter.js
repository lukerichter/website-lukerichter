const second = 1000, minute = 60 * second, hour = 60 * minute, day = 24 * hour;
const startDate = new Date("2025-09-17T00:00:00");

const elements = {
    day: document.getElementById('days'),
    hour: document.getElementById('hours'),
    minute: document.getElementById('minutes'),
    second: document.getElementById('seconds')
}

function updateCounter() {

    const diffms = new Date() - new Date("2025-09-17T00:00:00")

    const days = Math.floor(diffms / day)
    const hours = Math.floor((diffms % day) / hour)
    const minutes = Math.floor((diffms % hour) / minute)
    const seconds = Math.floor((diffms % minute) / second)

    elements.day.textContent = String(days).padStart(2, '0')
    elements.hour.textContent = String(hours).padStart(2, '0')
    elements.minute.textContent = String(minutes).padStart(2, '0')
    elements.second.textContent = String(seconds).padStart(2, '0')
}

updateCounter();
setInterval(updateCounter, 1000);
