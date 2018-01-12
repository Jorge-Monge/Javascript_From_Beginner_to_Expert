/*
 * setTimeout(JS function, milliseconds); function will be run once
 * setInterval(JS function, milliseconds); function will run many times in intervals.
 * 
 * clearTimeout
 * clearInterval
 */

function displayCounter(counter) {
    var stopwatchHandler = document.getElementById("stopwatchHandler");
    stopwatchHandler.innerHTML = "Hola" + counter;
};

window.onload = function () {
    
    var buttonStart = document.getElementById("buttonStart");
    var buttonStop = document.getElementById("buttonStop");
    var stopwatchHandler = document.getElementById("stopwatchHandler");
    var intervalRefId = null;
    

    buttonStart.onclick = function () {
        if (intervalRefId) {
            clearInterval(intervalRefId);
        };
        var startingValue = document.getElementById("startingValue").value;
        intervalRefId = setInterval(function () {
            if (startingValue < 0) {
                clearInterval(intervalRefId);
                return;
            };
            stopwatchHandler.innerHTML = startingValue--;
        }, 1000);
    };

    buttonStop.onclick = function () {
        if (intervalRefId) {
            clearInterval(intervalRefId);
        }
    };

};

