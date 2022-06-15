$(function(){
// Binding Function

$("#btnAdd").click(handleButton);
$("#list li").click(handleDelete);
console.log("Bindings Successful ");

});

function handleButton(){

    var value = $("#text").val();
    $("#list").append("<li>" + value + "</li>");
    $("#list li").click(handleDelete);

};

function handleDelete(){

    $(this).remove();

};