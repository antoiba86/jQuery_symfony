$(function() {
   $(".odd-li").click(function() {
       $("p, li").css("background-color", "transparent");
       $("li:odd").css( "background-color", "red"); 
   });
   $(".odd-p").click(function() {
       $("p, li").css("background-color", "transparent");
       $("p:odd").css( "background-color", "red"); 
   });
   $(".even-li").click(function() {
       $("p, li").css("background-color", "transparent");
       $("li:even").css( "background-color", "red"); 
   });
   $(".even-p").click(function() {
       $("p, li").css("background-color", "transparent");
       $("p:even").css( "background-color", "red"); 
   });
   $(".clear-oddeven").click(function() {
       $("p, li").css("background-color", "transparent");
   });
});

$(function() {
   $(".first-li").click(function() {
       $(".seleccion").css("background-color", "transparent");
       $(".seleccion:first").css( "background-color", "red"); 
   });
   $(".eq-li").click(function() {
       var valor = $("#valorSelect").val();
       $(".seleccion").css("background-color", "transparent");
       $(".seleccion:eq("+valor+")").css( "background-color", "red"); 
   });
   $(".gt-li").click(function() {
       var valor = $("#valorSelect").val();
       $(".seleccion").css("background-color", "transparent");
       $(".seleccion:gt("+valor+")").css( "background-color", "red"); 
   });
   $(".lt-li").click(function() {
       var valor = $("#valorSelect").val();
       $(".seleccion").css("background-color", "transparent");
       $(".seleccion:lt("+valor+")").css( "background-color", "red"); 
   });
   $(".slice-li").click(function() {
       var valor = $("#valorSelect").val();
       var valor2 = $("#valorSelect2").val();
       $(".seleccion").css("background-color", "transparent");
       $(".seleccion").slice(valor, valor2).css( "background-color", "red"); 
   });
   $(".clear-li").click(function() {
       $(".seleccion").css("background-color", "transparent");
   });
});

$(function() {
   $(".tell-hidden").click(function() {
       var num = $(".seleccion2:hidden");
       alert("Los elementos escondidos son " + num.length);
   });
   $(".show-hidden").click(function() {
       $(".seleccion2:hidden").show();
   });
   $(".all-hidden").click(function() {
       $(".seleccion2").hide();
   });
   $(".clear-li2").click(function() {
       $(".seleccion2").show();
       $(".element-hidden").hide();
   });
});

$(function() {
   $(".div-has").click(function() {
       $("#padre-div").has("li").css("background", "red");
   });
   $(".not-has").click(function() {
       $( "li" ).not( "#has-father").css("background", "red");;  
   });
   $(".clear-li3").click(function() {
       $("li").css("background-color", "transparent");
       $("#padre-div").css("background-color", "transparent");
   });
});