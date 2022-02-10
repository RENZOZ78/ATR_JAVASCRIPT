$(function(){
    //traitement
    //modifier le contenu du li sruvele
    //this= seulement pour la balsie span du li qui est survolée
    $("li").hover(function(){
        $("span",this).html('-');
        $("p",this).show();

    },function(){
        $("span",this).html('+');
        $("p",this).hide();
    });
})