
$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();

var numberinput= $("#number").val();
var numberEnter= parseInt(numberinput);
var othernumbers= [];
console.log(numberEnter);

for(var i=1; numberEnter >=i; i+=1) {

$("#result").text(othernumbers)
}
if (numberEnter % 15 === 0) {
    $("#result").text("pingpong");
  }
else if (numberEnter % 5 === 0) {
    $("#result").text("pong");
}
  else if (numberEnter % 3 === 0) {
    $("#result").text("ping");
}
});
});
