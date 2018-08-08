var numField1 = document.getElementById("numField1");
var numField2 = document.getElementById("numField2");
var resultField = document.getElementById("resultField");
var form = document.getElementById("xIsWhatPercentOfY");

form.addEventListener("submit", function(event) {
    
    if (!numField1.value || !numField2.value) { //ChecksNull/Undefiend//
        alert("Please Enter Values Into Each Field");
    } else {

    var x = parseFloat(numField1.value);  //parseFloat turns into #
    var y = parseFloat(numField2.value);
            
    var result = x / y; // converts to decemal//
    var percent = result * 100;
        
    resultField.innerText = "Answer: " + percent + "%";
    event.preventDefault(); //This stops page refresh//
    }
});

//---------------------------------------------------

//var form = document.getElementById("xIsWhatPercetnOfY");
//var numField1 = document.getElementById("numField1");
//var numField2 = document.getElementById("numField2");
//var resultField = document.getElementById("resultField");
//
//
//form.addEventListener("submit", function(event) {
//    
//    if (!numField1.value || !numField2.value) { //ChecksNull/Undefiend//
//        alert("Please Enter Values Into Each Field");
//    } else {
//
//    var x, y = parseFloat(numField1.value, numField2.value);
////  var x = parseFloat(numField1.value);  //parseFloat turns into #
////  var y = parseFloat(numField2.value);
//            
//    var result = (x / y) * 100; // converts to decemal//
////    var percent = result * 100;
//        
//    resultField.innerText = "Answer: " + result + "%";
//    event.preventDefault(); //This stops page refresh//
//    }
//});

//---------------------------------------------------

    //(innerText) removes/replaces Text containing a specified String

    // to RETURN to HTML Content, use (innerHTML). but will show Elements used.

    //(textContent) will produce everything (even extra spacing) inside the element.
        
//------------------------------
//OR EDIT THE FORM THIS WAY
//but this way is NOT REPEATABLE

//var myCalFunction = function() {
//    //Function Goes Here
//}
//form.addEventListener("submit", myCalFunction);
//------------------------------

//TESTING to Make Sure JS and HTML is Connected Properly
//numField1.value = "TEST";
//resultField.innerText = "TEST2";

