/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function refreshAll(){
    refreshArgent();
    refreshScore();
    refreshMult();

}

function  refreshArgent(){
    $(".argent").html("$ : "+ formatNumber(argent));
}

function refreshScore(){
    $(".score").html("Score : "+ formatNumber(score));
}

function refreshMult(){
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

function refreshCoutUsine(id){
    $("#Produit"+id +" .cout" ).html("cout de la prochaine usine : " +currentWorld.products.product[id].cout)
}
function refreshNbrUsines(id){
    $("#Produit"+id +" .quantite").html("nombre d'usines : "+ currentWorld.products.product[id].quantite);
}