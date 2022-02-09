$(function(){
    //lors du survol d'un li, le li=500px
    $("ul").hover( function(){
        //li a une largeur de 500px
        $("li",this).animate({width:'500px'},500);
        // .texte est montré
        //$(".texte",this).show();
        $(".texte",this).animate({top:'150px'},1500);
    },
    //sinon (lorsqu'on ne survol pas le li)
    function(){
        //li a une largeur de 200px
        $("li",this).animate({width:'200px'},200);
        // .texte est caché
        //$(".texte",this).hide();
        $(".texte",this).animate({top:'-50px'},200);
    }
    )
})