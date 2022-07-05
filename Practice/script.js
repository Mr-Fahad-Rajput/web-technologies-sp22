$(function(){
// Binding Function

$("#btnAdd").click(handleButton);
$("#list li").click(handleDelete);
$("#ajaxCall").click(sendAjax);
$("#ajaxcallApi").click(sendajaxApi);
$("#delbtn").click(delApi);
//sendajaxApi();
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
function sendajaxApi(){
    console.log("Rec Ajax Response API");

$.ajax({
   
    url:"https://usman-recipes.herokuapp.com/api/products",
    method:"GET",
    success:  function (response){
        console.log("Rec Ajax Response API");
        console.log(response);
        $("#resultsApi").empty();

        for(var i=0; i<response.length; i++){
            $("#resultsApi").append("");
            $("#resultsApi").append(`<div class="recipee"  temp-id="${response[i]._id}"> <button id=delBtn>Delete</button><div> <h1>Title of Recipe :${response[i].title }</h1></div><br><div> Body of Recipe <br> ${response[i].body} </div></div>`);
            $("#delBtn").click(delApi);

        }
    
    }

});

};
function delApi(){
    console.log("del Function Called")
    var btn= $(this);
    var pnt = btn.closest(".recipee");
    let id = pnt.attr("temp-id");
    console.log(id);
    
    }