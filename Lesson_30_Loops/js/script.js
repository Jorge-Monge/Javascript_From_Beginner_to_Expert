var videoCourses = [
    "PHP",
    "MySQL",
    "Javascript",
    "PDO",
    "Grunt.js",
    "SASS"
];

var result = document.getElementById("result");

//for (var i = 0; i < videoCourses.length; i++) {
//    result.innerHTML += videoCourses[i] + "<br>";
//}

//result.innerHTML += "<br>" + " ------------------------ " + "<br>";

//var x = 0;
//while (x < videoCourses.length) {
//    result.innerHTML += videoCourses[x] + "<br>";
//    x++;
//}

var programmingCourses = document.getElementById("programmingCourses").getElementsByTagName("li");

result.innerHTML += "<br>" + programmingCourses; // This returns a Collection

result.innerHTML += "<br>" + programmingCourses[0]; // This returns a HTMLLIElement

result.innerHTML += "<br>" + programmingCourses[0].innerHTML; // This returns the text of the list element

// Lets get all the list elements with a loop
var i = 0;
result.innerHTML += "<br> *** INSIDE A WHILE LOOP *** <br>";
while (i < programmingCourses.length) {
    result.innerHTML += "<br>" + programmingCourses[i].innerHTML; // This returns the text of the list element
    i++
}