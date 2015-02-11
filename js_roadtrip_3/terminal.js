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

closeTerminal(greeting);

function closeTerminal(message){
    message();
}