$('#manda').click(function() {
  var new_message = $('#user_text').val();
  $('.conversation').append('<div class="template"><div class="message mine">' + new_message + '</div></div>');
});
