$("#getValor").click(function() {
   alert($("#inputPrueba").val());
   alert($("#parraPrueba").text());
});

$("#setValor").click(function(){
   var inputValue = $("#inputPrueba").val(); 
   var pText = $("#parraPrueba").text();
   $("#inputPrueba").val(pText);
   $("#parraPrueba").text(inputValue);
});