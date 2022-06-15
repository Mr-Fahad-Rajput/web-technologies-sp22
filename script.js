$(function(){
// Binding Function

$("#btnAdd").click(handleButton);
$("#list li").click(handleDelete);
$("#ajaxCall").click(sendAjax);
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

function sendAjax(){

console.log("Sending Ajax Call");

//Send Request Here

$.get("test.txt",handleResponse);
console.log("Request Sent");


};
function handleResponse(response){
    console.log("Rec Ajax Response");
    $("#results").append(response);

}