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

};


//##


$(document).ready(function(){
    // Run Section1's button
    $("#closeTerminal").click(function(){
      closeTerminal(greeting);
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