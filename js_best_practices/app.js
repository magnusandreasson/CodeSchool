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