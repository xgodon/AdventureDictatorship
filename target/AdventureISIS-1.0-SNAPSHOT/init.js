/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

	var names = ["admiring",
		"adoring",
		"affectionate",
		"agitated",
		"amazing",
		"angry",
		"awesome",
		"blissful",
		"boring",
		"brave",
		"clever",
		"cocky",
		"compassionate",
		"competent",
		"condescending",
		"confident",
		"cranky",
		"dazzling",
		"determined",
		"distracted",
		"dreamy",
		"eager",
		"ecstatic",
		"elastic",
		"elated",
		"elegant",
		"eloquent",
		"epic",
		"fervent",
		"festive",
		"flamboyant",
		"focused",
		"friendly",
		"frosty",
		"gallant",
		"gifted",
		"goofy",
		"gracious",
		"happy",
		"hardcore",
		"heuristic",
		"hopeful",
		"hungry",
		"infallible",
		"inspiring",
		"jolly",
		"jovial",
		"keen",
		"kind",
		"laughing",
		"loving",
		"lucid",
		"mystifying",
		"modest",
		"musing",
		"naughty",
		"nervous",
		"nifty",
		"nostalgic",
		"objective",
		"optimistic",
		"peaceful",
		"pedantic",
		"pensive",
		"practical",
		"priceless",
		"quirky",
		"quizzical",
		"relaxed",
		"reverent",
		"romantic",
		"sad",
		"serene",
		"sharp",
		"silly",
		"sleepy",
		"stoic",
		"stupefied",
		"suspicious",
		"tender",
		"thirsty",
		"trusting",
		"unruffled",
		"upbeat",
		"vibrant",
		"vigilant",
		"vigorous",
		"wizardly",
		"wonderful",
		"xenodochial",
		"youthful",
		"zealous",
		"zen"
        ];

$(document).ready(function () {
        $.getJSON(serveurUrl + "webresources/generic/world", function (world) { 
            currentWorld = world;   
            initProducts();
            initManagers();
            
            score = currentWorld.score;
            argent = currentWorld.money;
            refrechArgent();
            refrechScore();
            
            

            var name = names[Math.floor(Math.random()*names.length)];
            document.getElementById('input').value = name;
            
            toastr.options = {
                "closeButton": true,
                "debug": false,
                "newestOnTop": false,
                "progressBar": false,
                "positionClass": "toast-bottom-right",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
              };
        }); 
        


       click();
       setInterval(function() { calcScore(); }, 100);

       
});


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
        
        $("#Produit"+index +" .cout" ).html(product.cout);
        
        createBar(index);
        
        
    });
}

function initManagers (){
    $.each(currentWorld.managers.pallier, function (index, pallier) {
        
        var div = document.getElementById('templateManager'),
        clone = $(div).clone(true); 
        clone.attr("id", "Manager"+index); 
        clone.attr("style", null);
        clone.appendTo($("#managers"));
        //clone.appendTo($("div:first"));
        
        var status="LOCKED";
        if (pallier.unlocked == "true"){
            status="UNLOCKED \o/"
        }
        $("#Manager"+index +" .unlock").html(status);
        
        $("#Manager"+index +" .logoManager > :first-child" ).attr("src",pallier.logo);
        
        $("#Manager"+index +" .price").html("Cout : " + pallier.seuil);
        
        
        
    });
}

function createBar(id){
    var bar = new ProgressBar.Line("#Produit"+id+" #container",
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