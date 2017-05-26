$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});

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
