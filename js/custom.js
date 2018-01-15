/*placeholder*/
$(function () {
    $('input, textarea').each(function () {
        var placeholder = $(this).attr('placeholder');
        $(this).focus(function () {
            $(this).attr('placeholder', '');
        });
        $(this).focusout(function () {
            $(this).attr('placeholder', placeholder);
        });
    });
});

$(document).ready(function(){
    $(".box").on("click", "li", function(){
        var tabsId = $(this).attr("id");
        $(this).addClass("active").siblings().removeClass("active")
        $("#" + tabsId + "-content-box").addClass("active").siblings().removeClass("active")
    })
})