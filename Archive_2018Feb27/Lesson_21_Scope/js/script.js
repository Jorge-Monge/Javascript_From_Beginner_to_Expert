function test(a)
{
    // 'a' has been passed as a parameter. It is now a local variable.
    // The global variable 'a' remains unchanged.
    a = 3;
    alert(a);
    // Global variables can be created inside a function,
    // just by removing the 'var' keyword:
    b = "Jorge Monge";
}
var a = 5;
test(a); // 5 is assigned to the local variable 'a'.
alert("Variable 'b' is: " + b);
