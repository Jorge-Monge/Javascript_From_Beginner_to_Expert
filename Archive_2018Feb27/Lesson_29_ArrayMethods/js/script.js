var videoCourses = [
    "XHTML",
    "PHP",
    "MySQL",
    "Apple",
    "Javascript",
    "Grunt.js",
    "SASS"
];

var numbers = [
    4, -54, 24, 12, 12, 55
];

document.getElementById("result").innerHTML = videoCourses;

// JOIN METHOD

// Change the default array method, which is .toString(),
// for instance, to change the linking element:

document.getElementById("result").innerHTML = videoCourses.join(" --- ");

// LENGTH PROPERTY
document.getElementById("result").innerHTML = videoCourses.length;

// CONCATENATE METHOD
// Returns an array which is a concatenation of the two input arrays, but
// it does not modify the input arrays.
document.getElementById("result").innerHTML = videoCourses.concat(numbers);
document.getElementById("result").innerHTML += "<br>---------------------<br>";
document.getElementById("result").innerHTML += videoCourses.join(" --- ");
document.getElementById("result").innerHTML += "<br>---------------------<br>";
document.getElementById("result").innerHTML += videoCourses.concat(numbers.concat(videoCourses));

// POP METHOD
// Returns the last element of the array, which is also removed from the array.
document.getElementById("result").innerHTML = videoCourses.pop();
document.getElementById("result").innerHTML += "<br>---------------------<br>";
document.getElementById("result").innerHTML += videoCourses.join(" --- ");

// PUSH METHOD
// Add an element to an array, and returns the length of the modified array.
// The new element is located at the last index position.
document.getElementById("result").innerHTML = "New array length: " + videoCourses.push("Pushed Element") + "<br>";
document.getElementById("result").innerHTML += videoCourses.join(" --- ");

// SHIFT METHOD
// Removes the first element of the array, and return it
document.getElementById("result").innerHTML = "First video course: " + videoCourses.shift();
document.getElementById("result").innerHTML += "<br>---------------------<br>";
document.getElementById("result").innerHTML += videoCourses.join(" --- ");

// UNSHIFT METHOD
// Add an element to an array and returns the length of the modified array.
// The new element is located at the first index position
document.getElementById("result").innerHTML = videoCourses.unshift("First Course") + "<br>";
document.getElementById("result").innerHTML += videoCourses.join(" --- ");

// SORT METHOD
// Sorts an array (original array is sorted and returned)
//document.getElementById("result").innerHTML = videoCourses.sort().join(" --- ");
//document.getElementById("result").innerHTML += "<br>---------------------<br>";
//document.getElementById("result").innerHTML += videoCourses.join(" --- ");

// REVERSE METHOD
// Inverts an array order
document.getElementById("result").innerHTML = videoCourses.reverse().join(" --- ");
// A reversed sorted order then would be:
videoCourses.sort().reverse();

// SORTING A NUMERICAL ARRAY
// Sorts an array (original array is sorted and returned)
document.getElementById("result").innerHTML = numbers.sort(function (a, b) { return a - b; });
document.getElementById("result").innerHTML += numbers.join(" --- ");

// SLICE METHOD
// Returns specific elements of the array but
// it does not modify the original array.
document.getElementById("result").innerHTML = videoCourses.slice(1, 3) + "<br>";
document.getElementById("result").innerHTML += videoCourses.join(" --- ");

// SPLICE METHOD (A, B)
// Removes from the original array B elements, starting at index A, for B
// and returns the removed elements.
//document.getElementById("result").innerHTML = videoCourses.splice(1, 3) + "<br>";
//document.getElementById("result").innerHTML += videoCourses.join(" --- ");
// It also works to add new array elements in a given position
// It removes and return the removed elements, and then insert the new ones.
document.getElementById("result").innerHTML = videoCourses.splice(1, 3, "A", "B", "C", "D", "E") + "<br>";
document.getElementById("result").innerHTML += videoCourses.join(" --- ");