function changeColor() {
    //this.style.color = "red";
    this.className += "changeColor";
}

function changeColorGreen() {
    //this.style.color = "green";
    this.className = "";
}

window.onload = function() {
    var result = document.getElementById("result");
    result.onmouseover = changeColor;
    result.onmouseout = changeColorGreen;
}

