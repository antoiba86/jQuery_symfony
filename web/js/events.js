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