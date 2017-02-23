
$(document).ready(function(){

  $.ajax({
    type:'GET',
    url: '/bios',
    success: function(response) {
    }
  });//end of ajax

  $.ajax({
    type:'GET',
    url: '/likes',
    success: function(response) {
    }
  });//end of ajax
  
});//end of doc.ready
