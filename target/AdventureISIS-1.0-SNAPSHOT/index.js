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





function calcScore(){
    //console.log("a");
    bars.forEach(function(b) {
        var id = bars.indexOf(b);
        if (b.value() == 1){
            
            // reset Bar
            b.set(0);
            audio.play();
            
            
            
            succesVente(id);
        }
        
        if (b.value() == 0 && currentWorld.managers.pallier[id].unlocked == true){
            
            launchProduction(id);
        }
        
    });
    
    
    
}

function succesVente(id){
    var plusvalue = currentWorld.products.product[id].revenu * currentWorld.products.product[id].quantite;
    deposer(plusvalue);
    incScore(plusvalue)
}

function incScore(plusvalue){
    
    score = score + plusvalue;
    refreshScore();
}



function incQuant(id){
    currentWorld.products.product[id].quantite = currentWorld.products.product[id].quantite+1;
    refreshNbrUsines(id);
}




function launchProduction(id){
    bars[id].animate(1, {duration: 1000});
}



function achatFactory(id){
    
    var p = currentWorld.products.product[id];
    var prixBase =p.cout;
    var m = 0;
    var cout = 0;
    
    switch(multiplicator) {
        case 1:
        case 10:
        case 100:
            m=multiplicator
            break;
        case "max":
            m= parseInt(Math.log(1-(currentWorld.money/prixBase)*(1-p.croissance))/Math.log(p.croissance));
            break;
        default:
            m=1
    }
    
    if (m==1){
        cout= prixBase;
        
        if ( isRetirable(cout)) {
            // Calcul du prix du prochain achat
            prixBase = prixBase*p.croissance;
            // Set du prix du prochain item acheté
            currentWorld.products.product[id].cout=prixBase;
            //raffraichissage du prix affiché de l'usine
            refreshCoutUsine(id);
            //retrait de l'argent
            retirer(cout);
            // augmentation de la quantité d'usines affichées
            incQuant(id);
        }
        
    }
    else {
        cout= prixBase*  (Math.pow(p.croissance, m) -1 )/ (p.croissance-1);
        
        if ( isRetirable(cout)) {
            // Calcul du prix du prochain achat
            prixBase = prixBase*  (Math.pow(p.croissance, m));
            // Set du prix du prochain item acheté
            currentWorld.products.product[id].cout=prixBase;
            //raffraichissage du prix affiché de l'usine
            refreshCoutUsine(id);
            //retrait de l'argent
            retirer(cout);
            // augmentation de la quantité d'usines affichées
            incQuant(id);
        }
    }
    
 
    
    

    
}
function retirer(thunes){
    argent = argent - thunes;
    refreshArgent();
}

function deposer(thunes){
    argent = argent + thunes;
    refreshArgent();
}

function achatManager(id){
    

    
    retirer (currentWorld.managers.pallier[id].seuil);
    
    unlockManager(id);
    $("#managersbutton .badge").text("New");
    toastr["info"]("Manager Hired ! ");

    
}

function unlockManager(id){
    currentWorld.managers.pallier[id].unlocked = true;
    currentWorld.products.product[id].managerUnlocked = true;
    refreshManager(id);
}

function formatNumber(number) {
if (number < 1000)
 number = number.toFixed(2);
 else if (number < 1000000)
 number = number.toFixed(0);
 else if (number >= 1000000) {
 number = number.toPrecision(4);
 number = number.replace(/e\+(.*)/, " 10<sup>$1</sup>");
 }
return number;
}
