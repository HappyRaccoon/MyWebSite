$(document).ready(function(){
  $('a').smoothScroll();
});

$("#footer-form").submit(function() {
    var str = $(this).serialize();
    $.ajax({
        type: "POST",
        url: "send.php",
        data: str,
        success: function(html) {
            $("#test_p").html(html);
        }
    });
    $("#footer-form").slideToggle();
    return false;
});