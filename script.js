
var form = document.getElementById("form")
form.addEventListener("submit", myFunction);

var good = "Blue"

function myFunction(event) {
  event.preventDefault();
  var ele = document.getElementsByName('color');
  var selectedButton = "";
 ele.forEach(function(element) {
     if(element.checked){
       selectedButton = element.value
       console.log(selectedButton)
         if(selectedButton === "Blue"){
           theFunction()
         }
     }
 })
}



function theFunction() {
  var pen = document.getElementById("yup");
      pen.style.display = "inline-block";
}



var form1 = document.getElementById("form1")
form1.addEventListener("submit", myFunction1);

var good1 = "Volleyball"

function myFunction1(event) {
  event.preventDefault();
  var ele = document.getElementsByName('sports');
  var selectedButton = "";
 ele.forEach(function(element) {
     if(element.checked){
       selectedButton = element.value
       console.log(selectedButton)
         if(selectedButton === good1){
           theFunction1()
         }
     }
 })
}


function theFunction1() {
  var pen = document.getElementById("yup1");
      pen.style.display = "inline-block";
}


function theFunction2() {
  var pen = document.getElementById("yup2");
      pen.style.display = "inline-block";
}


var form2 = document.getElementById("form2")
form.addEventListener("submit", myFunction1);

var good2 = "Cooking"

function myFunction2(event) {
  event.preventDefault();
  var ele = document.getElementsByName('things');
  var selectedButton = "";
 ele.forEach(function(element) {
     if(element.checked){
       selectedButton = element.value
       console.log(selectedButton)
         if(selectedButton === good2){
           theFunction2()
         }
     }
 })
}

