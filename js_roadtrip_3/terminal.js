var greeting = function() {
    alert("We hope you had a great time!")
};

closeTerminal(greeting);

function closeTerminal(message){
    message();
}