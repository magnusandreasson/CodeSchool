// Level 1 - Section 1
var greeting;
var newCustomer = true;

if (newCustomer) {
    greeting = function() {
        alert("We hope you had a great time!")
    };

} else {
    greeting = function() {
        alert("Welcome back to the badlands!")
    };
}

function closeTerminal(message){
    message();
}

//##

// Level 1 - Section 2

var square = function(num){
    return num * num;
};

var numbers = [34,11,2,33,14,5,16,7];

var results = numbers.map(function(num) {
    return square(num);
});

console.log(results.toString());


//##

// Level 1 - Section 3

var parkRides = [ ["Birch Bumpers", 40], ["Pines Plunge", 55],
                  ["Ceader Coaster", 20], ["Ferris Wheel of Firs", 90]];
var fastPassQueue = ["Ceader Coaster", "Pines Plunge", "Birch Bumpers", "Pines Plunge"];

function buildTicket (allRides, passRides, pick){
    // allRides is the array of the rides and their wait times
    // passRides is the array of next available Fast Pass rides
    // pick is the ride that our customer wants a ticket for

    // if the next available Fast Pass is for the ride that the customer wants, we'll give them that pass
    if(passRides[0] == pick){
       var pass = passRides.shift();
        return function() {
            alert("Quick! You've got a Fast Pass to " + pass + "!");
        };
    } else {
        for(var i=0; i < allRides.length; i++){
            if(allRides[i][0] == pick){
                return function() {
                    alert("A ticket is printing for " + pick + "!\n" +
                          "Your wait time is about " + allRides[i][1] + " minutes.");
                };
            }
        }
    }
};


//##
// Level 2 - Section 1

function buildCoveTicketMaker(transport) {
    return function(name) {
        alert("Here is your transportation ticket via the " + transport + ".\n" +
                "Welcome to the Cold Closures Cove, " + name + "!");
    }
}
var buildSubmarineTicket = buildCoveTicketMaker("Submarine");
var buildBattleshipTicket = buildCoveTicketMaker("Battleship");
var buildSeagullTicket = buildCoveTicketMaker("Giant Seagull");



//##
// Level 2 - Section 2
function buildCoveTicketMaker2(transport) {
    var passenger = 0;
    return function(name) {
        passenger++;
        alert("Here is your transportation ticket via the " + transport + ".\n" +
            "Welcome to the Cold Closures Cove, " + name + "!\n" +
            "You are passenger number " + passenger + ".");
    }
}

var buildSubmarineTicket2 = buildCoveTicketMaker2("Submarine");
var buildBattleshipTicket2 = buildCoveTicketMaker2("Battleship");
var buildSeagullTicket2 = buildCoveTicketMaker2("Giant Seagull");

//##
// Level 2 - Section 3
function assignTorpedo (name, passengerArray) {
    for (var i=0; i < passengerArray.length; i++) {
        console.log(passengerArray[i]);
        if(passengerArray[i] === name){
            return function() {
                alert("Ahoy, " + name + "!\n" + "Man your post at Torpedo #" + (i+1))
            };
        }
    }
}

//##
// Level 3 - Section 1

function capacityStatus (numPassengers, capacity) {
    // If train is full -
    //    Execute a function that alerts a message that no seats remain and returns false
    // If train is not full -
    //    Execute a function that alerts a message with how many seats remain and then returns true

    if(numPassengers == capacity) {
       noSeats();
    }
    else {
        seatsAvail();
    }
    function noSeats () {
        alert("No Seats!");
        return false;
    };

    function seatsAvail(){
        alert("There are " + (capacity - numPassengers) + " seats left.");
        return true;
    };
}

//##
// Level 4 - Section 1

var booksArray = ["Atlas Shrugged", "The Girl with the Dragon Tattoo", "Steelheart" ];
var myBox = {height: 6, width: 8, length: 10, volume: 480,
             material: "cardboard",
             contents: booksArray
            };
//##
// Level 4 - Section 2

var aquarium =  {
    Nemo:  { type: "fish", species: "clownfish", length: 3.7 },
    Peach: { type: "echinoderm", species: "starfish", length: 5.3 },
    "Coral Castle": { type: "environment", material: "coquina", moves: false},

    addCritter: function (name, type, species, length){
        this[name] = {type: type, species: species, length: length};
    },

    addToy: function (name, type, material, moves ){
        this[name] = {type: type, material: material, moves: moves};
    }
};

// Create the delete function. This could have been done inside the aquarium object.
// We are just demonstrating how to add a function after the object has been initialized.
aquarium.takeOut = function (name) {
    this[name].name = name; // Create new name property so that we can return the name of the property
    var temp = this[name];
    delete this[name];
    return temp;
};


//##
$(document).ready(function(){
    // Run Level 1 Section1's button
    $("#closeTerminal").click(function(){
      closeTerminal(greeting);
    });

    // Run level 1 Section 3
    $('#selectRide').on('change', function() {
        //Get the value of the select box and call the returned function
        buildTicket(parkRides, fastPassQueue, this.value)();
    });

    // Run Level 2 Section1
    $("#submarine").click(function(){
        buildSubmarineTicket($("#ship-ticket-holder-name").val());
    });
    $("#battleship").click(function(){
        buildBattleshipTicket($("#ship-ticket-holder-name").val());
    });
    $("#seagull").click(function(){
        buildSeagullTicket($("#ship-ticket-holder-name").val());
    });

    // Run Level 2 Section2
    $("#submarine2").click(function(){
        buildSubmarineTicket2($("#ship-ticket-holder-name2").val());
    });
    $("#battleship2").click(function(){
        buildBattleshipTicket2($("#ship-ticket-holder-name2").val());
    });
    $("#seagull2").click(function(){
        buildSeagullTicket2($("#ship-ticket-holder-name2").val());
    });

    // Run level 2 Section 3
    var passengers = ["R2D2", "Luke", "Leia", "Hans Solo"];
    $("#assignTorpedo").on('change', function() {
        console.log("called");
        assignTorpedo(this.value, passengers)();
    });

    // Run Level 3 Section 1

    $("#seats-avail").click(function(){
        capacityStatus($("#num-passengers").val(), $("#capacity").val());

    });

    // Run Level 4 Section 1
    $("#boxWidth").html(myBox.width);
    $("#boxMaterial").html(myBox.material);
    $("#boxContents").html(myBox.contents);

    $("#updateWidth").click(function(){
        myBox.width = $("#widthInput").val();

        $("#boxWidth").html(myBox.width);
    });

    $("#updateContents").click(function(){
        myBox.contents.push($("#contentsInput").val());

        $("#boxContents").html(myBox.contents);
    });

    // Run Level 4 Section 2
    for (var key in aquarium){
        if (aquarium.hasOwnProperty(key)){
            if (aquarium[key]["type"] == "fish" || aquarium[key]["type"] == "echinoderm"){
                console.log(key + " -> " + aquarium[key]["type"]);
                $("table#aquarium").append("<tr><td class='name'>" + key + "</td><td>" + aquarium[key]["type"]+ "</td><td>"  + aquarium[key]["species"] + "</td><td>" + aquarium[key]["length"] +  "</td></tr>")
            }
            else if (aquarium[key]["type"] == "environment" ){
                console.log(key + " -> " + aquarium[key]["type"]);
                $("table#aquarium").append("<tr><td class='name'>" + key + "</td><td>" + aquarium[key]["type"] + "</td><td>"  + aquarium[key]["material"] + "</td><td>" + aquarium[key]["moves"] + "</td></tr>")
            }

        }

    }




    // Print the Sections of JavaScript using //## as a delimiter
    $.ajax({
        url : "app.js",
        dataType: "text",
        success : function (data) {
            var newData = data.split("//##");
            for (var i = 0; i < newData.length; i++) {
                var location = ".section" + i;
                $(location).html(newData[i]);
            }
        }
    });

});