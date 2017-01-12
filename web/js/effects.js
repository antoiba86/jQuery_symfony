
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

$(function() {
    $("#desa-p").click(function() {
       $( "p" ).fadeOut( 1500 );
   });
   $("#mostrar-p").click(function() {
       $( "p" ).fadeIn( 750 );
   });
});

$(function() {
    $("#desa-p").click(function() {
       $( "p" ).fadeOut( 1500 );
   });
   $("#mostrar-p").click(function() {
       $( "p" ).fadeIn( 750 );
   });
});

$(function() {
    $("#toggle-fast").click(function() {
       $( "#quicksilver" ).toggle();
   });
   $("#toggle-normal").click(function() {
       $( "#quicksilver" ).toggle( "slow" );
   });
   $("#toggle-slow").click(function() {
       $( "#quicksilver" ).toggle( 5000 );
   });
});

$(function() {
    $("#fadeTog").click(function() {
       $( "#quicksilver2" ).fadeToggle();
   });
   $("#slideTog").click(function() {
       $( "#flash2" ).slideToggle( );
   });
});

$(function() {
    $("#button-delay").click(function() {
        $( "#quicksilver3" ).slideUp(800).delay( 1500 ).fadeIn(1000);
        $( "#flash3" ).slideUp(800).fadeIn(1000);
        $( "#wonder3" ).hide(800).delay( 1500 ).show(1000);
        $( "#super3" ).hide().delay( 1500 ).show();
    });
});

$( "#go" ).click(function() {
  $( "#square" ).animate({ left: "+=100px" }, 2000 );
});
 
// Stop animation when button is clicked
$( "#stop" ).click(function() {
  $( "#square" ).stop();
});
 
// Start animation in the opposite direction
$( "#back" ).click(function() {
  $( "#square" ).animate({ left: "-=100px" }, 2000 );
});

$( "#toggle-stop" ).on( "click", function() {
  $(".square2").stop().slideToggle( 1000 );
});

$( "#hoverme-stop-2" ).hover(function() {
  $( this ).find( "img" ).stop( true, true ).fadeOut();
}, function() {
  $( this ).find( "img" ).stop( true, true ).fadeIn();
});

$( "#hoverme-stop-1" ).hover(function() {
  $( this ).find( "img" ).fadeOut();
}, function() {
  $( this ).find( "img" ).fadeIn();
});

$( "#caja_negra" ).hover(function() {
  $( this ).animate({
    left: [ "+=100", "swing" ],
    height: [ "+=150" ]
}, 1000 );}, function() {
  $( this ).animate({
    left: [ "-=100", "swing" ],
    height: [ "-=100" ]
}, 1000 );});

$("#buttonQ").click(function() {
    runIt();
    showIt();
});

function runIt() {
    $("#boxQ")
    .show( "slow" )
    .animate({ left: "+=200" }, 2000 )
    .slideToggle( 1000 )
    .slideToggle( "fast" )
    .animate({ left: "-=200" }, 1500 )
    .hide( "slow" )
    .show( 1200 )
    .slideUp( "normal", runIt );
}

function showIt() {
  var n = $("#boxQ").queue( "fx" );
  $( "#spanQ" ).text( n.length );
  setTimeout( showIt, 100 );
}