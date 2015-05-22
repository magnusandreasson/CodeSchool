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