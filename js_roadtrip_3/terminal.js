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

$(document).ready(function(){
    $("#closeTerminal").click(function(){
      closeTerminal(greeting);
    });

});