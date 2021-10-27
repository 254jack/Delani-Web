$(document).ready(function() {
  $("#product").click(function() {
    $("#product-text").toggle();
    $("#products-img").toggle();
  });
});
$(document).ready(function() {
  $("#design").click(function() {
    $("#design-text").toggle();
    $("#design-img").toggle();
  });
});
$(document).ready(function() {
  $("#development").click(function() {
    $("#development-text").toggle();
    $("#development-img").toggle();
  });
});
$(document).ready(function(){
  $("form").submit(function(){
    alert("Hello we have received your message and we are working on it.Thank you for keeping in touch with us.")
  });
});