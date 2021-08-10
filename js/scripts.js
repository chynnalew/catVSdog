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
})
$("#dogTreat").click(function() {
  $(".treats#meat").removeClass();
})
});