var e = jQuery.Event("keyup");
e.which = 13; // # Some key code value
e.keyCode = 13;

$(document).on('click', '#sound', function() {
  var myAudio = new Audio("/imrcv.wav")
  myAudio.play();
  $('#say').trigger("keydown", {which: 50});
});

$(document).on('keyup', function(event) {
  if ( event.which == 13 ) {
    var myAudio = new Audio("/imrcv.wav")
    myAudio.play();
  }
});

var start = new Audio("/win95.mp3");
start.play();
