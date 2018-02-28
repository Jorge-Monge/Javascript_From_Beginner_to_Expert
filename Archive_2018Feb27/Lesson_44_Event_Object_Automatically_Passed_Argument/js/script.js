
/*
altKey, ctrlKey, shiftKey - Were these keys pressed during the event?
button - mouse click
clientX, clientY - client screen coordinates
keyCode - key pressed, String.fromCharCode(e.keyCode) returns the key character
target.tagName - the tagName of the element that invoked the function
*/

function doSomething(e, tooltipMessage) {
    var tmp = document.getElementById("tmp");
    var tooltip = document.getElementById("tooltip");
    // Line below to make it work with IE 6, 7 8
    // If using IE 6, 7, 8, 'e' will be undefined and the variable
    // 'event' will take its value from 'window.event', which is
    // available in IE 6, 7, 8
    var event = e || window.event;
    //tmp.innerHTML = event;
    //tmp.innerHTML = event.altKey;   // Will return 'false', but if we press the Alt key
    // at the same time, it will return 'true'
    //tmp.innerHTML = event.button; // Will return 0, 1 or 2 depending on the mouse button clicked.
    tooltip.style.display = "block";
    tooltip.style.left = e.clientX + "px";
    tooltip.style.top = e.clientY + "px";
    tooltip.innerHTML = tooltipMessage;
}

window.onload = function () {
    var result = document.getElementById("result");
    //result.onmousemove = doSomething;
    // In the line above, AUTOMATICALLY, when we invoke a function on an event, THE EVENT IS PASSED AS AN ARGUMENT TO THE FUNCTION,
    // i.e, it will be available there.
    //result.onmousemove = doSomething;

    // If we need to send more arguments than just the event:
    result.onmousemove = function (event) {
        //doSomething(event, "Hola");
        doSomething(event, this.tagName);
    }
};



