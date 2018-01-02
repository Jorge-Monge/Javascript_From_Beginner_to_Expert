//var programmingCourses = document.getElementById("programmingCourses").getElementsByTagName(li);

// Instead of selecting elements with the long query above, we can also do this:

//var programmingCourses = document.querySelectorAll("#programmingCourses li")

//alert(programmingCourses[0].innerHTML);

// Getting the third occurrence of the list element.
//var programmingCourses = document.querySelector("#programmingCourses li:nth-child(3)");
//alert(programmingCourses.innerHTML);

// querySelector() will select the first occurrrence of the query and will return it
// as a single variable (not an array)

var programmingCourses = document.querySelector("#programmingCourses li");
alert(programmingCourses.innerHTML);