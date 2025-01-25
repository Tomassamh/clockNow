function showTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    let ampm = 'AM';

    if (hours > 12) {
        hours -= 12;
        ampm = 'PM';
    } else if (hours === 0) {
        hours = 12;
    }

    hours = hours.toString().padStart(2, '0');

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}
setInterval(showTime, 1000);