/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function  refrechArgent(){
    $(".argent").html("$ : "+ formatNumber(argent));
}

function refrechScore(){
    $(".score").html("Score : "+ formatNumber(score));
}

function refrechMult(){
    $(".multiplicator").html("Mult : "+multiplicator);
}

function refreshManager(id){
    var status ="LOCKED"
        if (currentWorld.managers.pallier[id].unlocked == true){
            status="UNLOCKED \o/";
            $("#Manager"+id +" .buyManager" )[0].disabled = true;
        }
        $("#Manager"+id +" .unlock").html(status);
}

function refrechCoutUsine(id){
    $("#Produit"+id +" .cout" ).html(currentWorld.products.product[id].cout)
}
