var access_token

$(function() {
    console.log( "ready!" );

	$("#token").on("submit", function(event){

  // Stop form from submitting normally
  event.preventDefault();
  $.ajax({
        type:'POST',
        url: 'https://api.eccmp.com/services2/authorization/oAuth2/Token',
        data:$('#token').serialize(),
        success: function(response) {
          access_token = response.access_token
          console.log(response.access_token)
        }});
    });
});
