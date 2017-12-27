var x = function(message)
{
    alert(message);
}

//test("Hola");

function test(f)
{
    // This function is receiving an anonymous function
    // as its argument.
    // Now, the function can be used inside the function:
    f("Jorge");
}

//test(function(name){alert("Hey, " + name);})

var hi = function(type)
{
    if (type === "boss")
        return function(name)
        {
            alert("Hi, " + name + ", boss!");
        }
    else
        return function(name)
        {
            alert("Hi, " + name);
        }
}

hi("employee")("Jorge");