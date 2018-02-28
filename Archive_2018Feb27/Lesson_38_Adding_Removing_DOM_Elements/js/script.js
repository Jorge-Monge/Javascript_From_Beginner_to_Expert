var p = document.createElement("p");

p.style.color = "red";
p.innerHTML = "<p id = 'test2'>Something New!</p>";

var body = document.querySelector("body");

body.appendChild(p);

var test2 = document.getElementById("test2");
test2.style.fontSize = "20px";

// Note that if I modify the p.innerHTML now,
// the variable 'test2' will not be accessible any more
// because the document (or the p. element?) is reparsed.

//p.innerHTML += "4";
//test2.style.color = "green";

// I need to do it like:
p.innerHTML += "4";
var test2 = document.getElementById("test2");
test2.style.color = "green";

// To remove elements:
var programmingCourses = document.querySelector("#programmingCourses");
programmingCourses.parentNode.removeChild(programmingCourses);