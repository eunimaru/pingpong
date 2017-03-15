function countTo (numberEnter){
  for(var i=1; numberEnter >=i; i+=1) {

  if (i % 15 === 0) {
    $("#result").append("pingpong");
  }
    else if (i % 5 === 0) {
    $("#result").append("pong");
  }
  else if (i % 3 === 0) {
    $("#result").append("ping");
  }
  else {
    $("#result").append("<p>"+ i + "</p>");
      }
    }
  }


$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();

var numberinput= $("#number").val();
var numberEnter= parseInt(numberinput);
$("#result").text("");
countTo(numberEnter);

  });
});
