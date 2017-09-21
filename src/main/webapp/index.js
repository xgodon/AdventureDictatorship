/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var bars = [];
var score = 0;
var argent = 0;
var multiplicator=1;
var audio = new Audio('audio/laser.mp3');
var count;
var template;
var serveurUrl = "http://localhost:8080/AdventureDictatorship/"; 
var currentWorld;
    
    
    $(document).ready(function () {
        $.getJSON(serveurUrl + "webresources/generic/world", function (world) { 
            currentWorld = world;
        
        initProducts();



        }); 
        


       click();
       
       setInterval(function() { calcScore(); }, 100);


    });
    
    
function calcScore(){
    //console.log("a");
    bars.forEach(function(b) {
        //console.log("a");
        if (b.value() == 1){
            
            // reset Bar
            b.set(0);
            audio.play();
            
            var id = bars.indexOf(b);
            
            incArgent(id);
        }
        
    });
    
    
    
}

function incArgent(id){
    var plusvalue = currentWorld.products.product[id].revenu * currentWorld.products.product[id].quantite;
    argent = argent + plusvalue;
    refrechArgent();
    incScore(plusvalue)
}

function incScore(plusvalue){
    
    score = score + plusvalue;
    refrechScore();
}

function  refrechArgent(){
    $(".argent").html("$ : "+ argent);
}

function refrechScore(){
    $(".score").html("Score : "+ score);
}

function refrechMult(){
    $(".multiplicator").html("Mult : "+multiplicator);
}

function incQuant(id){
    currentWorld.products.product[id].quantite = currentWorld.products.product[id].quantite+1;
    $("#Produit"+id +" .quantite").html(currentWorld.products.product[id].quantite);
}

function initProducts (){
    $.each(currentWorld.products.product, function (index, product) {
        
        var div = document.getElementById('template'),
        clone = $(div).clone(true); 
        clone.attr("id", "Produit"+index); 
        clone.attr("style", null);
        clone.appendTo($("#produits"));
        //clone.appendTo($("div:first"));
        $("#Produit"+index +" .quantite").html(product.quantite);
        
        $("#Produit"+index +" .logo > :first-child" ).attr("src",product.logo);
        
        createBar(index);
        
        
    });
}

function launchProduction(id){
    bars[id].animate(1, {duration: 1000});
}

function click(){
    clickLogo();
    clickMulti();
    clickBuy();
    clickPanel();
}

function clickPanel(){
$(".links a").click(function() {
  $(".panels").hide();
  $(this.hash).fadeIn();
});
}

function clickBuy(){
    $(".buy").click(function (event) {
        var id = $(this).parents(".produit").attr("id").substr(7);
        
        if ( achetable(id) ){
            achatFactory(id);
        }
    });
    
}

function achatFactory(id){

//    
//        switch(multiplicator) {
//            case 1:
//                multiplicator=10
//                break;
//            case 10:
//            case 100:
//                multiplicator="max"
//                break;
//            case "max":
//                var quantiteMax= parseInt(Math.log(1-(world.money/prixDernierAchat)*(1-product.croissance))/Math.log(product.croissance));
//                break;
//            default:
//                multiplicator=100
//        }
                
    argent = argent - currentWorld.products.product[id].cout;
    refrechArgent();
    incQuant(id);
    
}

function achetable(id){

    if (currentWorld.products.product[id].cout < argent ){
        return true
    }
    return false
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

function disponible(id){
    if (bars[id].value() == 0 ){
        return true;
    }
    return false;
}
function createBar(id){
    var bar = new ProgressBar.Line("#Produit"+id ,
    {  
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#00ff00',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'}
        
        
    });
    bars.push(bar);
    
}