$(document).on('click', '#sound', function() {
    var myAudio = new Audio("/imrcv.wav")
    myAudio.play();
});

$(document).on('keypress', function(event) {
  if ( event.which == 13 ) {
    var myAudio = new Audio("/imrcv.wav")
    myAudio.play();
  }
});