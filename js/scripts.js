$(document).ready(function() {
$("#cat").click(function() {
  alert("MEOW!");
  $("#dogSays").append("<p>BORK!<p>");
});

$("#dog").click(function() {
  alert("BORK!");
  $("#catSays").append("<p>MEOW!<p>");
});
$("#catTreat").click(function() {
  $(".treats#salmon").removeClass();
});
$("#catSabotage").click(function() {
  $("#salmon").remove();
});
$("#dogTreat").click(function() {
  $(".treats#meat").removeClass();
});

});

