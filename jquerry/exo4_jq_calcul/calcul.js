$(function(){
    //lors du clic sur +
        $("button").click(function(){

            var btn=$(this).val();

            //addition
            if(btn== '+'){
                var resA= Number($(".valeur1").val()) +Number($(".valeur2").val());
                $(".resultat").val(resA);

            //multipilcation
            }if(btn== '*'){
                var resA= Number($(".valeur1").val()) *Number($(".valeur2").val());
                $(".resultat").val(resA);

            //soustraction
            }if(btn== '-'){
                var resA= Number($(".valeur1").val()) -Number($(".valeur2").val());
                $(".resultat").val(resA);
            

                //division
            }else if(btn == "/"){
                if ($('.valeur2').val() !=0){
                    var resd=$('.valeur1').val() / $(".valeur2").val();
                    $('.resultat').val(resd);
                }else{
                    //chamsp de formulaire=> val()
                    $('.resultat').val("division par 0 impossible");
                }
            }
    })
})