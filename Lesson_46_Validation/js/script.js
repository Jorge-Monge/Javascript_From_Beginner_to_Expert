
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

window.onload = function () {
    var email = document.getElementById("email");
    var submitFormButton = document.querySelector("#newsletter input[type='submit']");

    submitFormButton.onclick = function (e) {

        // The lines below prevents the default functioning
        // of the event. In this case, the form is NOT submitted.
        var e = e || window.event;
        if (e.preventDefault)
            e.preventDefault();
        else
            e.returnValue = false;

        // With the lines below, we restore the normal
        // functioning of the submit operation.
        // The advantage here is that since we stop the default action
        // until we force the submit, we can introduce validation code.

        var newsletter = document.getElementById("newsletter");
        if (email.value == "jorge@canada.com")
            newsletter.submit();
        else
            alert("Please enter a valid email!");
        
    };
};



