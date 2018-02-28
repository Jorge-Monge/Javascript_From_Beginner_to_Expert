// We need to create several similar objects (dictionaries)
// In order not to repeat several object definitions, we will
// create a Class, a constructor function.

function person(firstname, lastname, age="18") {
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
var participant3 = new person("Juan", "Díaz");

alert(participant.firstname + " " + participant.lastname + " is " + participant.age + " years old.");
alert(participant.isAdult());
alert(participant3.age);