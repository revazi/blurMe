<<<<<<< HEAD
var myModal = $('#myModal');
closMyModal = function(){
    myModal.css({
=======
closeMyModal = function(){
    $('#myModal').css({
>>>>>>> a51e71b20753601375079d8a294f47f118dc77d4
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

<<<<<<< HEAD
	$('#clickme').stop().click(openMyModal);
	$('#exit').stop().click(closMyModal);

   $(document).keyup(function(e){

        if(e.keyCode==27 && myModal.hasClass("open")){
            closMyModal();
        } else if(e.keyCode ==13 && myModal.hasClass("closed")) {
            openMyModal();
=======
	$('#clickme').stop().click(function(){
		var value = $(this).parent().find(".text").val();
		$('#myModal').css({
			'opacity' : '1',
			'visibility' : 'visible'
		});
		$('#cover').css({
			'visibility' : 'visible'
		});
		$('#myform').fadeOut();

		$('#editable').text(value);
	});
	$('#exit').stop().click(closeMyModal);

   $(document).keyup(function(e){
        if(e.keyCode==27){
            closeMyModal();
>>>>>>> a51e71b20753601375079d8a294f47f118dc77d4
        }
   });
});
