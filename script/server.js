$(document).ready(function(){
    var  d = $("<div>");
    $("#mid").append(d);

    $("#mid").mouseover(function(){
        alert("Hola!");
    });
});

let s = '{"id":5}'

$.ajax({
    url:"localhost/list/update",
    data: s,
    type: "POST",
    datatype: "json";
    success: function(data) {
        console.log(data);
});

