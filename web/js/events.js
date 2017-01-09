$( "#especial" ).click(function() {
    alert( "Has pulsado sobre un párrafo" );
});

$( "#especial" ).on( "click", function() {
    alert( "Has hecho click sobre un párrafo" );
});

$( "#no-especial" ).click(holaMundo).mouseenter(holaMundo);

function holaMundo() {
    alert("Hola Mundo");
}

$( "#no-especial" ).on( "click mouseenter", function() {
    alert( "Has hecho click o has pasado por encima de un párrafo" );
});

$( "#pulsar-p" ).on({
    mouseover: function() { 
        alert( "Has pasado por encima de un párrafo" );
    },
    click: function(event) { 
        alert( "Has hecho click sobre un párrafo" );
        event.stopPropagation();
    },
    mouseleave: function() {
        alert("Has abandonado el párrafo");
    }
});

$( "#hola" ).on( "click", {
    foo: "hola"
}, function( event ) {
    alert( "Párrafo hola dice: " + event.data.foo );
});

$( "#adios" ).on( "click", {
    foo: "adios"
}, function( event ) {
    alert( "Párrafo adios dice: " + event.data.foo );
});

$( document ).ready(function(){
    $(".alert").click(function(){
       alert("Has pulsado un botón con alert jeje");
       $( "<button class='alert'>Alert!</button>" ).appendTo( "#alert-buttons" );
    });
});

$( document ).ready(function(){
    $( "#alert-buttons2" ).on( "click", ".alert2", function() {
        alert("Has pulsado un botón con alert jeje");
        $( "<button class='alert2'>Alert!</button>" ).appendTo( "#alert-buttons2" );
    });
});

$( document ).ready(function(){
    $( "#b-unico" ).one( "click", function() {
        alert("Solo me puedes pulsar una vez, lo siento");
    });
});

$( document ).ready(function(){
    $( "#b-nounico" ).one( "click", firstClick);
});

function firstClick() {
    alert( "Me puedes pulsar más veces!!!!!" );
    
    // Ahora creamos un nuevo controlador para el botón
    $( this ).click( function() { alert( "Te lo dije, púlsame todas las veces que quieras!" ); } );
}


$( document ).ready(function(){
    $( "#hola-b" ).click(holaClase);
    
    $("#poner-hola").click(function() {
        $("#hola-b").on("click", holaClase);
    });
    
    $("#quitar-hola").click(function() {
        $("#hola-b").off("click");
    });
});

function holaClase() {
    alert("Hola");
}


$( document ).ready(function(){
    $( "#hola-b2" ).click(holaClase).mouseenter(holaClase);
    
    $("#poner-hola2").click(function() {
        $("#hola-b2").on("click", holaClase);
    });
    
    $("#quitar-hola2").click(function() {
        $("#hola-b2").off("click mouseenter");
    });
});


$( document ).ready(function(){
    $( ".onefun" ).hover(function() {
        $( this ).fadeOut( 100 );
        $( this ).fadeIn( 500 );
    });
    $( ".twofun" ).hover(
        function() {
            $( this ).append( $( "<span> ***</span>" ));
        }, function() {
            $( this ).find( "span:last" ).remove();
        }
    );
});

$(function() {
    $( "#google" ).click(function( event ) {
        event.preventDefault();
        alert("NO");
    });
});