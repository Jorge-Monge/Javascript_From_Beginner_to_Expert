/*
 * onmouseover - when the mouse is over (enters) the element
 * onmouseout - when the cursor is leaving the element
 * onmousemove - when the cursor is moving on the element
 * onclick - when the element is clicked
 * ondblclick - when the element is fast double clicked
 * 
 * onclick is a connection of these events:
 *  - onmousedown - when we have the mouse button down
 *  - onmouseup - when we release the mouse button
 */


window.onload = function () {
    var sample = document.getElementById("sample");
    sample.onmousedown = function () {
        this.onmousemove = function (e) {
            this.style.left = e.clientX -this.width/2 + "px";
            this.style.top = e.clientY -this.height/2 + "px";
        };
        this.onmou
    };

    sample.onmouseup = function (e) {
        sample.onmousemove = null;
    };

    sample.ondragstart = function (e) {
        e.preventDefault();
    };
};

