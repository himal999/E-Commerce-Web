$(document).ready(function(){
    $('#search,.fa-search').mouseenter(function(){
        $('.logo').hide();
    });
    $('#search,.fa-search').mouseleave(function(){
        $('.logo').show();
    });
});