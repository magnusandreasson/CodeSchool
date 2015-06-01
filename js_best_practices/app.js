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
    $("#armory").html(armory.swords);

    $("#addToArmory").click(function() {
        armory.addSword($("#sword").val() + "<br />");
        $("#armory").html(armory.swords);
    });

    $("#sword").keydown(function (e){
        if(e.keyCode == 13){
            armory.addSword($("#sword").val() + "<br />");
            $("#armory").html(armory.swords);
        }
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