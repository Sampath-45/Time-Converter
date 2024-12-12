let convertBtnEl = document.getElementById("convertBtn");
let hoursInputEl = document.getElementById("hoursInput");
let minutesInputEl = document.getElementById("minutesInput");
let errorMsgEl = document.getElementById("errorMsg");
let timeInSecondsEl = document.getElementById("timeInSeconds");


convertBtnEl.addEventListener("click", function getSeconds() {

    let hoursInputVal = hoursInputEl.value;
    let minutesInputVal = minutesInputEl.value;
    if (hoursInputVal === "") {
        errorMsgEl.textContent = "Please enter a valid number of hours";
        errorMsgEl.style.color = '#f5f7fa';
    } else if (minutesInputVal === "") {
        errorMsgEl.textContent = "Please enter a valid number of minutes";
        errorMsgEl.style.color = '#f5f7fa';
    } else {
        errorMsgEl.textContent = null;
        let seconds = (parseInt(hoursInputVal) * 3600) + (parseInt(minutesInputVal) * 60)
        timeInSecondsEl.textContent = seconds;
        timeInSecondsEl.classList.add("timeCon");
        timeInSecondsEl.classList.add("mt-3")
        timeInSecondsEl.textContent = seconds + "s";
    }
});