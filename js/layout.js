var myModal = $('#myModal');
closeMyModal = function(){
    myModal.css({
        'opacity' : '0'
    });
    $('#cover').css({
        'visibility' : 'hidden'
    });
    $('#myform').fadeIn();

    myModal.removeClass();
    myModal.addClass("closed");
}

openMyModal = function(){
    var value = $(document).find(".text").val();
    myModal.css({
        'opacity' : '1',
        'visibility' : 'visible'
    });
    $('#cover').css({
        'visibility' : 'visible'
    });
    $('#myform').fadeOut();

    $('#editable').text(value);

    myModal.removeClass();
    myModal.addClass("open");
}


$(document).ready(function(){

    $('#clickme').stop().click(openMyModal);
    $('#exit').stop().click(closeMyModal);

    $(document).keyup(function(e){

        if(e.keyCode==27 && myModal.hasClass("open")){
            closeMyModal();
        } else if(e.keyCode ==13 && myModal.hasClass("closed")) {
            openMyModal();
        }
    });
});