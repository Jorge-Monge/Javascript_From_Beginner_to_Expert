function changeColor() {
    //this.style.color = "red";
    this.className += "changeColor";
}

function changeColorGreen() {
    //this.style.color = "green";
    this.className = "";
}

var result = document.getElementById("result");

result.onmouseover = changeColor;

result.onmouseout = changeColorGreen;
