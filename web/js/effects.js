
$(function() {
   $("#esconder").click(function() {
       $(this).hide();
   });
   $("#mostrar").click(function() {
       if($('#esconder').is(':hidden')) {
            $("#esconder").show();
        }
        else {
            alert("No está escondido");
        }
   });
   
});


$(function() {
   $("#esconder-rap").click(function() {
       $(this).hide("fast");
   });
   $("#esconder-lento").click(function() {
       $(this).hide("slow");
   });
   $("#mostrar2").click(function() {
       $("#esconder-rap").show("fast");
       $("#esconder-lento").show("slow");
   });
   
});

$(function() {
   $("#esconder-seconds").click(function() {
       var num = $("#seconds-hide").val();
       $(this).hide(parseInt(num));
   });
   $("#mostrar3").click(function() {
       var num = $("#seconds-hide").val();
       $("#esconder-seconds").show(parseInt(num));
   });
   
});

$(function() {
   $("#p-slideUp").click(function() {
       $("#p-dis").slideUp();
   });
   $("#mostrar4").click(function() {
       $("#p-dis").slideDown();
   });
   
});