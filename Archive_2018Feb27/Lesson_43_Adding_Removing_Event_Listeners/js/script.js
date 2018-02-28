// addEventListener
// removeEventListener
/*
 * They are useful to overcome the situation when we
 * want to invoke more than just one function on a given
 * event.
 * Then, the last defined function would be the only that 
 * is actually invoked on the event happening.
 * 
 * These 2 methods don't work on IE 5, 7, 8, then:
 * attachEvent
 * detachEvent
 */

// An approach that could be used to
// branch the code depending on whether
// the method '.addEventListener' is available
// in the browser (IE 6, 7, 8:):


function createEvent(obj, eventName, nameOfFunctionToInvoke) {
    if (document.addEventListener) {//Chrome, Firefox, etc.
        obj.addEventListener(eventName, nameOfFunctionToInvoke);
    }
    else { // IE 6, 7, 8
        obj.attachEvent("on" + eventName, nameOfFunctionToInvoke);
    }

}

function changeColorRed() {
    //this.style.color = "red";
    this.className = "textRed";
}

function changeColorGreen() {
    //this.style.color = "green";
    this.className = "textGreen";
}

function increaseFontSize() {
    //this.className += " bigFontSize";
    var fontSize = parseInt(window.getComputedStyle(this).getPropertyValue("font-size"));
    this.style.fontSize = (++fontSize) + "px"
}

window.onload = function() {
    var result = document.getElementById("result");
    var stop = document.getElementById("stop");
    //result.onmouseover = changeColor;
    //result.onmouseout = changeColorGreen;
    result.addEventListener("mouseover", changeColorRed);
    // Now we can add more functions to the same event:
    result.addEventListener("mouseover", increaseFontSize);
    result.addEventListener("mouseout", changeColorGreen);
    // Now imagine I want to stop the font increasing interacting with
    // the 'stop' div.
    stop.addEventListener("click", function (){
        result.removeEventListener("mouseover", increaseFontSize)
    });

    // OR, if we are to branch the code to handle IE 6, 7, 8:
    createEvent(result, "mouseover", changeColorRed) // etc.

}

