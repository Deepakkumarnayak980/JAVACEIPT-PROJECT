const endDate = "23 Sept 2023 08:20:00 PM";
document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input");

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    if (diff < 0) return;

    inputs[0].value = Math.floor(diff / 3600 / 24); // Days
    inputs[1].value = Math.floor(diff / 3600) % 24; // Hours
    inputs[2].value = Math.floor(diff / 60) % 60;   // Minutes
    inputs[3].value = Math.floor(diff) % 60;        // Seconds
}

// Initial call to set up the timer
clock();

setInterval(() => {
    clock(); // Update the timer every second
}, 1000);
