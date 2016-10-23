$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault();
        var userInput = $("#shopping-list-entry").val();
        console.log(userInput);

        $('.shopping-list').append('<li> <span class="shopping-item">' + userInput +
            '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button> <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
        //event.preventDefault();
    });


    $(".shopping-list").on("click", ".shopping-item-delete", function() {
        $(this).parent().parent().remove();
    });


    $(".shopping-list").on("click", ".shopping-item-toggle", function() {
        $(this).parent().parent().children(".shopping-item").toggleClass("shopping-item__checked");
    });


    $(".shopping-list").on("click", ".delete-all-checked", function() {
        $(this).parent().parent().find(".shopping-item__checked").parent().remove();
    });

});






//1. Get value from text box on click
//2. Get value from text box on return 
//3. On click of check button, cross out that item 
//4. On click of delete button, remove that item 

// .toggleClass() -- add/remove one or more classes 
// .closest() -- get the element that matches the selector 
// .submit() -- trigger that event on an element 
// .event.preventDefault() -- if called, default action will not be triggered
