// Section 1
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

// Section 2

var square = function(num){
    return num * num;
};

var numbers = [34,11,2,33,14,5,16,7];

var results = numbers.map(function(num) {
    return square(num);
});

console.log(results.toString());


//##

// Section 3

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


$(document).ready(function(){
    // Run Section1's button
    $("#closeTerminal").click(function(){
      closeTerminal(greeting);
    });

    //Run Section 3
    $('#selectRide').on('change', function() {
        //Get the value of the select box and call the returned function
        buildTicket(parkRides, fastPassQueue, this.value)();
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