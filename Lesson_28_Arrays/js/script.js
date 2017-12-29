var products = [
    "XHTML",
    "PHP",
    "MySQL"
];

alert(products[0]);

products[3] = "Python";

alert(products[3]);
alert(products[products.length - 1]);

// Append an element to an array
products.push("C#");
alert(products[products.length - 1]);

// Arrays can also be created like (NOT RECOMMENDED)
var destinations = new Array();

// ASSOCIATIVE ARRAYS

// They are really an OBJECT
var person = [];
person["firstname"] = "Jorge";
person["lastname"] = "Monge";

alert(person.firstname);