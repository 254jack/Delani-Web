//create a toggle effect function on pruduct paragraph and image

$(document).ready(function() {
    $("#product").click(function() {
        $("#product-text").toggle();
        $("#products-img").toggle();
    });
});


//create a function that toggle between development text 
$(document).ready(function() {
    $("#design").click(function() {
        $("#design-text").toggle();
        $("#design-img").toggle();
    });
});


//create a toggle effect for development text
$(document).ready(function() {
    $("#development").click(function() {
        $("#development-text").toggle();
        $("#development-img").toggle();
    });
});


//create a function that gives a feedback after the user submits the details
$(document).ready(function() {
    $("form").submit(function() {
        var name = $("#name").val();
        alert("Hello " + name + " we have received your message and we are working on it.Thank you for keeping in touch with us.")
    });
});