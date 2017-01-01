$(function() {
    $("section ul li a").click(function() {
        var link = $(this).attr("href");
        $("#content-iframe div").append("<iframe style='width:100%; height:100%; position:absolute; top:0; left:0;' src='"+link+"'></iframe");
        $(".wrapper-iframe").show();
        return false;
    });
});

$(function() {
    $(".close-iframe").click(function() {
        $(".wrapper-iframe").hide();
        $("#content-iframe div").empty();
    });
});