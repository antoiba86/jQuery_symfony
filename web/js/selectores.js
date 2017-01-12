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

$(function() {
   $(".shmi-son").click(function() {
       clear4();
       $( ".shmi-child>img" ).css( "border", "3px solid red" );
   });
   $(".vader-children").click(function() {
       clear4();
       $( ".vader-child>img" ).css( "border", "3px solid red" );
   });
   $(".leia-son").click(function() {
       clear4();
       $( ".leia-child>img" ).css( "border", "3px solid red" );
   });
   $(".shmi-descendant").click(function() {
       clear4();
       $( ".shmi-child img" ).css( "border", "3px solid red" );
   });
   $(".vader-descendant").click(function() {
       clear4();
       $( ".vader-child img" ).css( "border", "3px solid red" );
   });
   $(".luke-siblings").click(function() {
       clear4();
       $( "#luke ~ div" ).find(".ancestor").css( "border", "3px solid red" );
   });
   $(".kylo-mother").click(function() {
       clear4();
       $( "#kylo" ).parent().find(".ancestor").css( "border", "3px solid red" );
   });
   $(".kylo-ancestor").click(clear4,function() {
       clear4();
       $( "#kylo img" ).parentsUntil("#star-wars").find( ".ancestor" ).css( "border", "3px solid red" );
   });
   $(".clear-li4").click(clear4);
});

function clear4() {
    $("#star-wars img").css("border", "3px transparent");
    $("#star-wars div").css("border", "3px transparent");
}

$(function() {
   $(".input-type").click(function() {
        var allInputs = $( ":input");
        $( "#form-result" ).text( "Encontrados " + allInputs.length + " inputs." );
   });
   $(".pass-type").click(function() {
       var input = $( "input:password" ).css({
        background: "yellow",
        border: "3px red solid"
      });
      $( "#form-result" )
        .text( "Hay " + input.length + " input de tipo 'password'." )
        .css( "color", "red" );
   });
   $(".reset-type").click(function() {
       var input = $( "input:reset" ).css({
        background: "yellow",
        border: "3px red solid"
      });
      $( "#form-result" )
        .text( "Hay " + input.length + " input de tipo 'reset'." )
        .css( "color", "red" );
   });
   $(".radio-type").click(function() {
       var input = $( "input:radio" ).css({
        background: "yellow",
        border: "3px red solid"
      });
      $( "#form-result" )
        .text( "Hay " + input.length + " input de tipo 'radiobutton'." )
        .css( "color", "red" );
   });
   $(".submit-type").click(function() {
       var input = $( "input:submit" ).css({
        background: "yellow",
        border: "3px red solid"
      });
      $( "#form-result" )
        .text( "Hay " + input.length + " input de tipo 'submit'." )
        .css( "color", "red" );
   });
   $(".text-type").click(function() {
       var input = $( "input:text" ).css({
        background: "yellow",
        border: "3px red solid"
      });
      $( "#form-result" )
        .text( "Hay " + input.length + " input de tipo 'text'." )
        .css( "color", "red" );
   });
   $(".checkbox-type").click(function() {
       var input = $( "input:checkbox" ).css({
        background: "yellow",
        border: "3px red solid"
      });
      $( "#form-result" )
        .text( "Hay " + input.length + " input de tipo 'checkbox'." )
        .css( "color", "red" );
   });
   $(".button-type").click(function() {
       var input = $( "form input:button" ).css({
        background: "yellow",
        border: "3px red solid"
      });
      $( "#form-result" )
        .text( "Hay " + input.length + " input de tipo 'button'." )
        .css( "color", "red" );
   });
});

$(function() {
    $("#myListFil").click(function() {
        $( "#myList li" ).filter( ":even" ).css( "background-color", "red" );
    });
    
    $("#myListFil2").click(function() {
        $( "#myList li" ).filter(function() {
          return $( "strong", this ).length === 1;
        })
          .css( "background-color", "red" );
    });
});