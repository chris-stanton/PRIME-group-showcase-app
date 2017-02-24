
$(document).ready(function(){

  $.ajax({
    type:'GET',
    url: '/bios',
    success: function(response) {
      for (var i = 0; i < response.length; i++) {
        $('#container').append(
          '<h1>' + '<img src="'+ response[i].image + '"/>' + //image
            '<div id="name">' + response[i].name + '</div>' //name
            '<div>' + response[i].bio + '</div>' //bio
            '<button id="likeButton"><span' + response[i].name + '></span></button>'//button
          '</h1>'
        );
      }//ends our for loop
    }//end of response
  });//end of ajax


  $.ajax({
    type:'GET',
    url: '/likes',
    success: function(response) {
    }
  });//end of ajax

});//end of doc.ready
