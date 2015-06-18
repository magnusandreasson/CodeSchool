// Level 1 - Section 1

    var isArthur = false;
    var isKing = false;

    function whichWeapon(){
        return isArthur && isKing ? "Excalibur" : "LongSword";
    }

    function weaponGreeting(weapon) {
        return weapon == "Excalibur" ? "Welcome King Arthur here is your " + weapon : "Here is your " + weapon;
    }

//##

// Level 1 - Section 2

    var armory = {
        addSword: function(sword) {
            this.swords = this.swords || [];
            this.swords.push(sword);
        }
    };

    function printArmory() {
        var prettyArmory = $.map( armory.swords, function( sword, index ) {
            return ( sword + "<br />");
        });
        $("#armory").html(prettyArmory);
    };

//##

// Level 1 - Section 3
    armory.addSword("Broad Sword");
    armory.addSword("Scimitar");
    var isKnight = false;

    armory.retrieveSword = function(request) {
        // If the inedexOf the request is -1 that means it is not in the array.
        return(this.swords.indexOf(request) >=0) ?
            this.swords.splice(this.swords.indexOf(request), 1)[0] :
            "No " + request + ", exists!";
    };

//##

// Level 2 - Section 1
    var treasureChest = {
      goldCoins: "10,000",
      magicalItem: "Crown of Speed",
      necklaces: ["ruby", "pearl", "sapphire", "diamond"],
      openLid: function () {
            alert("Creeeak!");
        }
    };

    // Loop through each item in a more efficient way
    var list = treasureChest.necklaces;
    for(var i = 0, x = list.length; i < x; i++){
        console.log(list[i]);
    }


//##

// Level 2 - Section 3

    $(document).ready(function(){


        // Fragments help with loading items in the dom so you don't have to reflow (performance hit) for each appended item.
        var  list = document.getElementById("kotwList"),
             kotw = [ "Jenna Rangespike",
                     "Neric Farthing",
                     "Darkin Stonefield"
                    ],
            fragment = document.createDocumentFragment(),
            element;
        for (var i= 0, x=kotw.length; i < x; i++){
            element = document.createElement("li");
            element.appendChild( document.createTextNode( kotw[i]));
            fragment.appendChild(element);
        }
        // Only add to the dom once
        list.appendChild(fragment);
    });


//##

// Level 2 - Section 5


    // Constructor
    function SpeedTest(testImplement, testParams, repetitions){
        this.testImplement = testImplement;
        this.testParams = testParams;
        this.repititions = repetitions || 10000;
        this.average = 0;
    }

    // Create a prototype to allow all versions of the SpeedTest to connect here instead of creating the methods in each instance.
    // Saves memory and speeds up processing
    SpeedTest.prototype = {
        startTest: function(title) {
            var beginTime, endTime, sumTimes = 0;
            for (var i = 0, x = this.repititions; i < x; i++){
                beginTime = +new Date();
                this.testImplement( this.testParams);
                endTime = +new Date();
                sumTimes += endTime - beginTime;
            }
            this.average = sumTimes / this.repititions;
            return console.log(title + ": Average execution across " + this.repititions + ": " + this.average);
        }
    };

    var firstRegimentNewbs = ["Grimble Horsehead", "Jark Winterborn", "Bunder Ropefist", "Ernst Breadbaker"];
    var firstRegimentKnights = [];

    var listsForTests = [firstRegimentNewbs, firstRegimentKnights];

    // Poor performance code for test
    var noBP = function ( listOfParams) {
        for(var i = 0; i < listOfParams[0].length; i++){
            var newGuy = listOfParams[0][i];
            listOfParams[1].push(newGuy);
        }
    };

    var noBPtest = new SpeedTest(noBP, listsForTests, 100000);
    noBPtest.startTest("Poor Performance");

    // Best Practices code for test
    var bp = function ( listOfParams) {
        for(var i = 0, x = listOfParams[0].length; i < x; i++){
            listOfParams[1].push(listOfParams[0][i]);
        }
    };


    var bpTest = new SpeedTest(bp, listsForTests, 100000);
    bpTest.startTest("Best Practices");

//##

// Level 4 - Section 1

// Namespaces are in all caps by convention
var HOFMASTER = {
    list: ["Jar Treen", "Maximo Rarter", "Pol Grist"],
    hof: document.getElementById("hof"),
    fragment: document.createDocumentFragment(),
    element: undefined,
    displayHOF: function() {
        // Setup the variable x in the first section of the for loop for performance boost
        for(var i = 0, x = this.list.length; i < x; i++){
            this.element = document.createElement("li");
            this.element.appendChild(document.createTextNode(this.list[i]));
            // Use a fragment for a DOM performance boost.  This will only reload the DOM once when it is appended after the for loop
            this.fragment.appendChild(this.element);
        }
        this.hof.appendChild(this.fragment);
    }

};


//##
$(document).ready(function(){

    //  Run Level 1: Section 1
    $("#weapon").html(weaponGreeting(whichWeapon()));

    $('input[type=radio][name=isArthur]').change(function() {
        $(this).val() === "True" ? isArthur = true : isArthur = false;
        $("#weapon").html(weaponGreeting(whichWeapon()));
        console.log(isArthur);
    });

    $('input[type=radio][name=isKing]').change(function() {
        $(this).val() === "True" ? isKing = true : isKing = false;
        $("#weapon").html(weaponGreeting(whichWeapon()));
        console.log(isKing);
    });

    // Run Level 1: Section 2
    printArmory();

    $("#addToArmory").click(function() {
        armory.addSword($("#sword").val());
        printArmory();
    });

    $("#sword").keydown(function (e){
        if(e.keyCode == 13){
            armory.addSword($("#sword").val());
            printArmory();
        }
    });

    // Run Level 1: Section 3
    $('input[type=radio][name=isKnight]').change(function() {
        $(this).val() === "True" ? isKnight = true : isKnight = false;
    });

    $("#getSword").click(function() {
        var weapon = isKnight && armory.retrieveSword($("#getSwordInput").val());
        console.log(weapon);
        printArmory();
        $("#mySword").html(weapon);

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