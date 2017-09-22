/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function click(){
    clickLogo();
    clickMulti();
    clickBuyProduct();
    clickBuyManager();
    clickPanel();
}

function clickPanel(){
$(".links a").click(function() {
  $(".panels").hide();
  $(this.hash).fadeIn();
});
}

function clickBuyProduct(){
    $(".buyProduct").click(function (event) {
        var id = $(this).parents(".produit").attr("id").substr(7);
        
        if ( achetable(id) ){
            achatFactory(id);
        }
    });
    
}

function clickBuyManager(){
    $(".buyManager").click(function (event) {
        var id = $(this).parents(".manager").attr("id").substr(7);
        
        if ( isManagerAchetable(id) && !isManagerUnlocked(id) ){
     
            achatManager(id);
        }
    });
    
}

function clickLogo(){
    $(".logo").click(function (event) {
        var id = $(this).parents(".produit").attr("id").substr(7);
        
        if ( disponible(id) ){
            launchProduction(id);
        }
    });
}

function clickMulti(){
    $(".multiplicator").click(function (event) {
        switch(multiplicator) {
            case 1:
                multiplicator=10
                break;
            case 10:
                multiplicator=100
                break;
            case 100:
                multiplicator="max"
                break;
            case "max":
                multiplicator=1
                break;
            default:
                multiplicator=100
        }
        refrechMult();
        
    });
    
    
}