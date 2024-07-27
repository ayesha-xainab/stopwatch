let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0]; // Initialize variables to track the time 
let timeRef = document.querySelector(".timer-display");
let int = null;

// Add click event listener to the "Start Timer" button.
document.getElementById("start-timer").addEventListener("click", () => {
    if (int !== null) {
        clearInterval(int); // If a timer is already running, clear it.
    }
    int = setInterval(displayTimer, 10); // Start a new timer that updates every 10 milliseconds.
});

// Add click event listener to the "Pause Timer" button.
document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(int);
});

// Add click event listener to the "Reset Timer" button.
document.getElementById("reset-timer").addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0]; // Reset all time variables to 0.
    // Update the timer display to show the reset time.
    timeRef.innerHTML = "00 : 00 : 00 : 000 ";
});

// Function to update and display the timer.
function displayTimer() {
    milliseconds += 10;  // Increment milliseconds by 10.

    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;  //  when milliseconds reach 1000, reset milliseconds to 0 and increment seconds.
        
        if (seconds == 60) {
            seconds = 0;
            minutes++;  // when seconds reach 60, reset seconds to 0 and increment minutes.
            
            if (minutes == 60) {
                minutes = 0;
                hours++;  // when minutes reach 60, reset minutes to 0 and increment hours.
            }
        }
    }

    // Format hours, minutes, and seconds to always be two digits.
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    // Format milliseconds to always be three digits.
    let ms =
        milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds: milliseconds;

    // Update the timer display with the formatted time.
    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
