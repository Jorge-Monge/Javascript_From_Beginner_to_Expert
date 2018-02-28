var div = document.getElementById("test");
    

// Objects
var person = {
    firstname: "Jorge",
    lastname: "Monge",
    age: 30,
    isAdult: function()
    {
        if (this.age < 18)
            return false;
        return true;
    },
    toString: function()
    {
        return this.firstname + " " + this.lastname;
    }
};

div.innerHTML = person.isAdult();