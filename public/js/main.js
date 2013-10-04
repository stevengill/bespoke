function login(){
    location.href = 'https://www.behance.net/v2/oauth/authenticate?client_id=2Sfl5ZgmEkrJMIG8TRhecHnFgNO0QHTw&redirect_uri=http://bespoke.elastichance.com/handle&scope=collection_read|collection_write&state=boo';
}



function sendSearch(){
	var params = {};

 	$.ajax({
		url: 'https://www.behance.net/v2/projects?tags=food&api_key=2Sfl5ZgmEkrJMIG8TRhecHnFgNO0QHTw',
		dataType: "json",
		type: "GET",
		cache: false,
		success: function(data){
			console.log(data);
		},
		error: function(xhr) {
			console.log(error);
		},
		complete: function(){
		}
	}); 
}

function formHandler(){
    var tags = $('#tag')[0].value;
    tags = tags.replace(' ', '').replace(',','|');
    location.href = "/feed?tag="+tags;
}

function liked(){
    
}

$(document).ready(function(){


	$(document).delegate('.dropdown-menu .option', 'click', function(){
		console.log('clicked');
		console.log($(this).parent().prev().html($(this).html()));
		$(this).parent().prev().html($(this).html());
	});


});
