var sum = 0;

function addNumbers() {
    // 'arguments' is an always-available array
    // within functions.
    alert("Arguments' length is " + arguments.length);
    for (var index in arguments) {
        //alert(arguments[index]);
        sum += arguments[index];
    }
    return sum;
}

alert(addNumbers(3, 7, 5));