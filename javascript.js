var a=0;

$(document).ready(function(){



$("#b1").click(function(){
    if (a==0){
        $(".perritos").hide();
        a=1;
    }
    else{
        $(".perritos").show();
        a=0;
    }});
$("#b2").click(function(){
    $(".titulo").text("Los mejores perros");
    $(this).fadeTo("fast",0.5);

});

});

