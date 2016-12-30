var rutas = ["/jQuery/web/images/imagen1.jpg","/jQuery/web/images/celiavinas2.jpg","/jQuery/web/images/kvin_mitnick.png"];
var rutaBoton = ["/jQuery/web/images/botonlleno.png","/jQuery/web/images/botonvacio.png"];
var n=1;

$(function() {
    setInterval(images, 5000);
});

function images() {
    var i = $("#slide");
    var buttons = $(".boton").toArray();
    if (n == 0) {
        $(i).attr("src", rutas[n]);
        $(buttons[0]).attr("src", rutaBoton[0]);
        $(buttons[1]).attr("src", rutaBoton[1]);
        $(buttons[buttons.length-1]).attr("src", rutaBoton[1]);
        $("#button_a").text("Registro");
        $("#button_a").attr("href", "registro.html");
        $("#href_header").attr("href", "registro.html");
        n++;
    }
    else if (n == rutas.length-1) {
        $(i).attr("src", rutas[n]);
        $(buttons[0]).attr("src", rutaBoton[1]);
        $(buttons[n]).attr("src", rutaBoton[0]);
        $(buttons[n-1]).attr("src", rutaBoton[1]);
        $("#button_a").text("Sobre Nosotros");
        $("#button_a").attr("href", "nosotros.html");
        $("#href_header").attr("href", "nosotros.html");
        n=0;
    }
    else {
        $(i).attr("src", rutas[n]);
        var num = buttons.length-1;
        $(buttons[num]).attr("src", rutaBoton[1]);
        $(buttons[n]).attr("src", rutaBoton[0]);
        $(buttons[n-1]).attr("src", rutaBoton[1]);
        $("#button_a").text("Examen");
        $("#button_a").attr("href", "login.html");
        $("#href_header").attr("href", "login.html");
        n++;
    }
	
}

$(function() {
    $(".buttons").click(function(e) {
        var num = $(this).attr('id');
        num = num.replace("button", "");
        n = num;
	images();
        e.preventDefault();
    });
});