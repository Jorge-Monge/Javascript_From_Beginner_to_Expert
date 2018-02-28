// We need to create several similar objects (dictionaries)
// In order not to repeat several object definitions, we will
// create a Class, a constructor function.

// This below is what is called an OBJECT CONSTRUCTION FUNCTION
function person(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.isAdult = function() {
        if (this.age < 18) {
            return false;
        }
        return true;
    };
}

var participant = new person("Jorge", "Monge", "45");
var participant2 = new person("Marta", "Asensi", "45");
var participant3 = new person("Juan", "Díaz", "30");

// PROTOTYPES
// We can add a property to an INSTANCE of a class, like:
//participant.hairColor = "red";
//alert(participant.hairColor);

// But we can also add a property to the CLASS, like:
person.prototype.hairColor = "black";
participant.hairColor = "blue";
participant2.hairColor = "green";
participant3.hairColor = "orange";
alert(participant.hairColor + " " + participant2.hairColor + " " + participant3.hairColor);
document.getElementById("test").innerHTML = participant.firstname + " " + participant2.firstname + " " + participant3.firstname;

//alert(participant.firstname + " " + participant.lastname + " is " + participant.age + " years old.");
//alert(participant.isAdult());
//alert(participant3.age);