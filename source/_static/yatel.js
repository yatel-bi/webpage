$(document).ready(function() {

    var CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    function makeId(){
        var unique = null;
        do {
            var text = "id_";
            for( var i=0; i < 5; i++ )
                text += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
            text += Math.floor(Math.random() * 10000007).toString()
            text += Math.floor(Math.random() * 100000078).toString()
            if(document.getElementById(text) == null)
                unique = text;
        } while(unique == null);
        return unique;
    }

    function createCarousel(data, id) {
        var $divCarousel = $('<div class="carousel slide" data-ride="carousel"/>');
        $divCarousel.attr("id", id);
        // Indicators
        var $ol = $('<ol class="carousel-indicators"/>');
        for(var idx=0; idx < data.length; idx++){
            var $li = $('<li/>');
            $li.attr("data-slide-to", idx.toString());
            $li.attr("data-target", "#" + id);
            if(idx == 0){
                $li.addClass("active");
            }
            $ol.append($li);
        }
        $divCarousel.append($ol);

        // Wrapper for slides
        var $carouselInner = $('<div class="carousel-inner"/>');
        for(var idx=0; idx < data.length; idx++){
            var imgcap = data[idx];
            var $img = $(imgcap[0]);
            var $cap = $(imgcap[1]);

            $cap.removeClass();
            $cap.addClass("carousel-caption");

            var $item = $('<div class="item"/>');
            if(idx == 0)
                $item.addClass("active");

            $item.append($img);
            $item.append($cap);

            $carouselInner.append($item);
        }
        $divCarousel.append($carouselInner);

        // Controls
        var  $leftCtrl = $('<a class="left carousel-control" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"></span></a>');
        $leftCtrl.attr("href", "#" + id);
        var $rightCtrl = $('<a class="right carousel-control" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>');
        $rightCtrl.attr("href", "#" + id);
        $divCarousel.append($leftCtrl);
        $divCarousel.append($rightCtrl);

        return $divCarousel;
    }

    $("div.carousel").each(function(idx, div){
        var $divData = $(div);

        var childrens = $divData.children("img");
        var cleaned = [];
        for(var idx=0; idx < childrens.length; idx++){
            var elem = childrens[idx];
            var caption = null;
            var captions = $(elem).next("div.caption");
            if(captions.length > 0)
                caption = captions[0];
            else
                caption = $('<div class="caption caption-empty"/>')[0]
            cleaned.push([elem, caption])
        }
        var $divCarousel = createCarousel(cleaned, makeId());

        $divData.empty();
        $divData.append($divCarousel);
    });

});
