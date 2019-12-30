$('#clicker').click(function() {
  let myVar = $('#recenica').val();

  let words = myVar.split(" ");
  let acronym = words.map(function(word) {
    return word.charAt(0).toUpperCase();
  }).join('');
  $("#rezultat").html(acronym);

  console.log(myVar);
});
