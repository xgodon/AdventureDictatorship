/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function achetable(id){

    if (currentWorld.products.product[id].cout <= argent ){
        return true
    }
    return false
}

function isRetirable(thunes){

    if (thunes <= argent ){
        return true
    }
    return false
}


function isManagerAchetable(id){
    if (currentWorld.managers.pallier[id].seuil <= argent ){
        return true
    }
    return false
}

function isManagerUnlocked(id){
    if (currentWorld.products.product[id].managerUnlocked == true ){
        return true
    }
    return false
}

function disponible(id){
    if (bars[id].value() == 0 ){
        return true;
    }
    return false;
}