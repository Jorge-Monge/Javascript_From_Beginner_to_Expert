
/*
Even when we just define the event listener on the 'result' div,
the event is aware of the subelement ('p', 'span', 'button', etc.) in which
the even is specifically raised.
That means that we don't need to specifically define an event listener
for these subelements.
*/

function doSomething(e, eventObj) {

    // If using IE 6, 7, 8, 'e' will be undefined and the variable
    // 'event' will take its value from 'window.event', which is
    // available in IE 6, 7, 8
    var event = e || window.event;
    var srcElement = e.target || e.srcElement;

    var tmp = document.getElementById("tmp");

    tmp.innerHTML = "source of event: " + srcElement.tagName +
                    "<br>event assigned to tag: " + eventObj.tagName;
}

//window.onload = function () {
//    var result = document.getElementById("result");
//    var bolded = document.getElementById("bolded");
//    var button = document.getElementById("button");
   
//    result.onmousemove = function (event) {
//        doSomething(event, this);
//    };
//};


// But sometimes we don't want the event to propagate.
// Imagine this situacion:

window.onload = function () {
    var result = document.getElementById("result");
    var bolded = document.getElementById("bolded");
    var button = document.getElementById("button");

    result.onclick = function (event) {
        alert("result");
        doSomething(event, this);
    };
    bolded.onclick = function (event) {
        alert("bolded");
    };
    button.onclick = function (event) {
        alert("button");
        doSomething(event, this);
        // To stop the propagation of the event:
        //event.stopPropagation();

        // Again, if we want to support IE 6, 7, 8:
        var e = event || window.event;
        if (e.stopPropagation)
            e.stopPropagation()
        else
            e.cancelBubble = true;
    };
    // The result is that we got 2 alerts, one for the BUTTON (for instance)
    // and another for the parent DIV.
};



