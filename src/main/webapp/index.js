/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var bars = [];


function click(){
    $(".logo").click(function (event) {
        var id = $(this).parents(".produit").attr("id").substr(7) - 1;
        var product = currentWorld.products.product[id];

        
        
        bars[id].animate(1, {duration: 1000});
        
    });
}

function createBar(id){
            var bar = new ProgressBar.Line("#Produit"+id,
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