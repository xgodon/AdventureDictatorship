/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



$(document).ready(function () {
    $.getJSON(serveurUrl + "webresources/generic/world", function (world) {
        currentWorld = world;
        initProducts();
        initManagers();

        score = currentWorld.score;
        argent = currentWorld.money;
        refreshAll();


        initName();


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
        
        $.ajaxSetup({
        headers: {"X-user": localStorage.getItem("username")}
 });


    });



    click();
    setInterval(function () {
        calcScore();
    }, 100);


});


function initProducts() {
    $.each(currentWorld.products.product, function (index, product) {

        var div = document.getElementById('template'),
                clone = $(div).clone(true);
        clone.attr("id", "Produit" + index);
        clone.attr("style", null);
        clone.appendTo($("#produits"));
        //clone.appendTo($("div:first"));
        $("#Produit" + index + " .quantite").html("nombre d'usines : "+ product.quantite);

        $("#Produit" + index + " .logo > :first-child").attr("src", product.logo);

        $("#Produit" + index + " .cout").html("cout de la prochaine usine : " + product.cout);

        createBar(index);
        



    });
}

function myMove() {
    var elem = document.getElementById("myAnimation");
    var pos = 0;
    var id = setInterval(frame, 10);
    var x=0;
    var y=0;
    var dx=5;
var dy=5;
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            
            if( x<0 || x>1000) dx=-dx; 
            if( y<0 || y>2000) dy=-dy; 
            x+=dx; 
            y+=dy;
            elem.style.top = x + 'px';
            elem.style.left = y + 'px';
        }
    }
} 

function initManagers() {
    $.each(currentWorld.managers.pallier, function (index, pallier) {

        var div = document.getElementById('templateManager'),
                clone = $(div).clone(true);
        clone.attr("id", "Manager" + index);
        clone.attr("style", null);
        clone.appendTo($("#managers"));
        //clone.appendTo($("div:first"));

        var status = "LOCKED";
        if (pallier.unlocked == "true") {
            status = "UNLOCKED \o/"
        }
        $("#Manager" + index + " .unlock").html(status);

        $("#Manager" + index + " .logoManager > :first-child").attr("src", pallier.logo);

        $("#Manager" + index + " .price").html("Cout : " + pallier.seuil);



    });
}

function createBar(id) {
    var bar = new ProgressBar.Line("#Produit" + id + " #container",
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

function initName() {
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



    var s_name = localStorage.getItem("username");

    $("#input").on("change keyup paste", function () {
        localStorage.setItem("username", document.getElementById('input').value);
    })

    if (s_name == null) {
        var name = names[Math.floor(Math.random() * names.length)];
        document.getElementById('input').value = name;
    } else {
        document.getElementById('input').value = s_name;

    }


}