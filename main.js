$(document).ready(function(){
  $('#manda').click(function() {
   send_message();
  });



  function send_message(){

    var message_text = $('#user_text').val();
    // racimolo il testo
    if (message_text) {
      // se la stringa in input è vera( diversa da zero la sua lunghezza)
      var new_message = $('.template .message').clone();
      // vado a clonare il contenuto del template (non ".template" ma ."template .message" fatto
      new_message.children('.text-message').text(message_text);
      // appendo il messaggio nella chat
      $('.conversation').append(new_message);
      // azzero il form mettendo valore stringa vuota
      $('#user_text').val('');
      // arriva la risposta automatica dopo 1 secondo
      setTimeout(receive_message , 1000);
    }
  };


  function receive_message(){

  var message__received = 'ok';
    var new_message2 = $('.template2 .message').clone();
    // vado a clonare il contenuto del template (non ".template" ma ."template .message" fatto
    new_message2.children('.message_received').text(message__received);
    // appendo il messaggio nella chat
    $('.conversation').append(new_message2);
  };

  $('.search_user').keyup( function(event) {
    var user_cercato = $(this).val().toLowerCase();
    console.log(user_cercato);
    // metto da parte quello che cerca l'utente
    $('.user').each( function (){
      var user_confrontato = $(this).find('.user_id').text().toLowerCase();
      console.log(user_confrontato);
      if (user_confrontato.includes(user_cercato)) {
        $(this).show();

      } else{
        $(this).hide();
      }
    });
  });
});
