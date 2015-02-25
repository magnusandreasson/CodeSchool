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