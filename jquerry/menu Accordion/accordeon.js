$(function(){
    //des qu'on afiiche, les sous menus sont chachés
         
        $("#navigation li ul").hide();
            
        //sinon au survol li
        $("ul li").hover(function(){
                $("ul",this).slideDown(500);

                
                
            }, function(){
                $("ul",this).slideUp(500);
            });  
    })