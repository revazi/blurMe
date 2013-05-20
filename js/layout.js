closeMyModal = function(){
    $('#myModal').css({
        'opacity' : '0'
    });
    $('#cover').css({
        'visibility' : 'hidden'
    });
    $('#myform').fadeIn();
}


$(document).ready(function(){

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
        }
   });
});
