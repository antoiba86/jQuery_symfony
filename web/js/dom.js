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

$(function() {
   $("#but-appendTo").click(function() {
       var li = $( "#myList li:first" ).appendTo( "#myList" );
       alert(li.text());
   });
   $("#but-append").click(function() {
       $( "#myList" ).append( $( "#myList li:first" ) );
   });
});

$(function() {
   $("#clone-appendTo").click(function() {
       $( "#myList2 li:first" ).clone().appendTo( "#myList2" );
   });
});

$(".yellow, .yellow2, .yellow3").click(function() {
   alert("soy un párrafo amarillo"); 
});

var parra;
$( "#use-remove" ).click(function() {
  parra = $( ".yellow" ).remove();
});

$( "#add-remove" ).click(function() {
  $( "#insertParra" ).append(parra);
});

var parra2;
$( "#use-detach" ).click(function() {
  parra2 = $( ".yellow2" ).detach();
});

$( "#add-detach" ).click(function() {
  $( "#insertParra2" ).append(parra2);
});

var parra3;
$( "#use-empty" ).click(function() {
  parra3 = $( ".yellow3" ).empty();
});

$( "#add-empty" ).click(function() {
  $( "#insertParra3" ).append(parra3);
});

$(function() {
    $("#mod-resource").click(function(){
        var form = $("<form/>", {method:'post', action:'index.php', id:'form_res'
        });
        var select = $("<select/>", {name:"type_student",id:"select-res"});
        select.append($("<option/>", {value:"adulto", text:"Adulto"}),
                    $("<option/>", {value:"empresarial", text:"Empresarial/Profesional"}),
                    $("<option/>", {value:"primaria", text:"Escuela Primaria"})
                );
        var radio = $("<div>", {class:"radio-mod radio-mod"});
        radio.append($("<input>", {type:"radio", name:"level", value:"a1"}),
                     $("<label>", {text:"A1"}),
                     $("<input>", {type:"radio", name:"level", value:"a2"}),
                     $("<label>", {text:"A2"})
        );
        form.append($("<label>", {class:'mod-label', text:"LEVEL*"}),
                $(radio),
                $("<label>", {class:'mod-label', text:"STUDENT TYPE*"}),
                $(select)
            );
        $('#form-added').append(form);
    });
});

$(function() {
   $("#changeHref").click(function() {
      $("#duck").attr( "href", "https://www.mozilla.org" ); 
   });
   
   $("#changeAtt").click(function() {
       $("#duck2").text("Ir a google");
       $("#duck2").attr({
           href: "www.google.es",
           id: "google",
        });
    });
});

$("#removeHref").click(function() {
   $("#google2").removeAttr("href");
});

$(function() {
   $("#specialBig").hover(function() {
       $(this).removeClass("specialBig").addClass("specialLittle");
   },
   function() {
       $(this).removeClass("specialLittle").addClass("specialBig");
   }); 
});