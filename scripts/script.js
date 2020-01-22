$(document).ready(function() {
  M.updateTextFields();
});


$(document).ready(function() {
  $('textarea#textarea2').characterCounter();
});


$('#textarea1').val('New Text');
M.textareaAutoResize($('#textarea1'));
