$(document).ready(function(){
  $("#blanks form").submit(function(event){
    var nameInput = $("#name").val();
    var dateInput = $("#date").val();
    var startInput = $("#start").val();
    var endInput = $("#end").val();
    $(".name").text(nameInput);
    $(".date").text(dateInput);
    $(".start").text(startInput);
    $(".end").text(endInput);

    $("#confirmation").show();
  event.preventDefault();
  });
});
