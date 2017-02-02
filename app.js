$(document).ready(function(){

var box = $('.box');
var reset = $('#reset');
var color = 'white';

box.on('click', function() {
    $(this).toggleClass(color);
})

reset.on('click', function(){
    box.removeClass('white blue green yellow white');
})

$('#red').on('click', function() {
    color = 'red';
})

$('#blue').on('click', function() {
    color = 'blue';
})

$('#green').on('click', function() {
    color = 'green';
})

$('#yellow').on('click', function() {
    color = 'yellow';
})

$('#white').on('click', function() {
    color = 'white';
})

});