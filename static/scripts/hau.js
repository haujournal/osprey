$(document).ready(function(){

    var _imgratio = 0;
    var t;
    var img_bg = new Array(
        ["images/backgrounds/hau-1.jpg",'1000','667','<a href="http://www.lukeduggleby.com">Photo by Luke Duggleby</a>'],
        ["images/backgrounds/hau-41.jpg",'1600','1200','<a href="http://lorenzoferrarini.com/">Photo by Lorenzo Ferrarini</a>'],
        ["images/backgrounds/hau-31.jpg",'1200','803','<a href="https://www.flickr.com/photos/thiefoli/sets/">Photo by Alfonso Castellanos</a>'],
        ["images/backgrounds/hau-4.jpg",'1200','803','<a href="http://www.lukeduggleby.com">Photo by Luke Duggleby</a>'],
        ["images/backgrounds/hau-6.jpg",'800','535','<a href="http://www.italobertolasi.com/">Photo by Italo Bertolasi</a>'],
        ["images/backgrounds/hau-42.jpg",'1600','1200','<a href="http://lorenzoferrarini.com/">Photo by Lorenzo Ferrarini</a>'],
        ["images/backgrounds/hau-37.jpg",'1000','667','<a href="#">Photo by Juan Javier Rivera</a>'],
        ["images/backgrounds/hau-34.jpg",'1000','667','<a href="http://wheneveridontgetbored.blogspot.in/">Photo by Ankush Samant</a>'],
        ["images/backgrounds/hau-45.jpg",'1600','1200','<a href="http://lorenzoferrarini.com/">Photo by Lorenzo Ferrarini</a>'],
        ["images/backgrounds/hau-10.jpg",'700','480','<a href="http://www.italobertolasi.com/">Photo by Italo Bertolasi</a>'],
        ["images/backgrounds/hau-15.jpg",'1200','803','<a href="#">Photo by Giovanni da Col</a>'],
        ["images/backgrounds/hau-39.jpg",'1000','662','<a href="http://timourclaquinchambugong.smugmug.com/">Photo by Timour Claquin Chambugong</a>'],
        ["images/backgrounds/hau-48.jpg",'1600','1200','<a href="http://lorenzoferrarini.com/">Photo by Lorenzo Ferrarini</a>'],
        ["images/backgrounds/hau-18.jpg",'1000','678','<a href="http://www.lukeduggleby.com">Photo by Luke Duggleby</a>'],
        ["images/backgrounds/hau-38.jpg",'1000','665','<a href="http://timourclaquinchambugong.smugmug.com/">Photo by Timour Claquin Chambugong</a>'],
        ["images/backgrounds/hau-40.jpg",'1600','1200','<a href="http://lorenzoferrarini.com/">Photo by Lorenzo Ferrarini</a>'],
        ["images/backgrounds/hau-19.jpg",'1000','667','<a href="http://www.lukeduggleby.com">Photo by Luke Duggleby</a>'],
        ["images/backgrounds/hau-43.jpg",'1600','1200','<a href="http://lorenzoferrarini.com/">Photo by Lorenzo Ferrarini</a>'],
        ["images/backgrounds/hau-36.jpg",'1000','667','<a href="https://www.flickr.com/photos/barrosnayara/">Photo by Naraya Barros</a>'],
        ["images/backgrounds/hau-33.jpg",'1000','665','<a href="http://wheneveridontgetbored.blogspot.in/">Photo by Ankush Samant</a>'],
        ["images/backgrounds/hau-47.jpg",'1600','1200','<a href="http://lorenzoferrarini.com/">Photo by Lorenzo Ferrarini</a>'],
        ["images/backgrounds/hau-23.jpg",'1000','667','<a href="http://www.lukeduggleby.com">Photo by Luke Duggleby</a>'],
        ["images/backgrounds/hau-32.jpg",'1200','803','<a href="https://www.flickr.com/photos/thiefoli/sets/">Photo by Alfonso Castellanos</a>'],
        ["images/backgrounds/hau-44.jpg",'1600','1200','<a href="http://lorenzoferrarini.com/">Photo by Lorenzo Ferrarini</a>'],
        ["images/backgrounds/hau-24.jpg",'1000','667','<a href="http://www.lukeduggleby.com">Photo by Luke Duggleby</a>'],
        ["images/backgrounds/hau-30.jpg",'1000','667','<a href="https://www.flickr.com/photos/adrianosgodoy/sets/72157645925028693/">Photo by Adriano Godoy</a>'],
        ["images/backgrounds/hau-46.jpg",'1600','1200','<a href="http://lorenzoferrarini.com/">Photo by Lorenzo Ferrarini</a>'],
        ["images/backgrounds/hau-28.jpg",'1000','667','<a href="http://www.lukeduggleby.com">Photo by Luke Duggleby</a>'],
        ["images/backgrounds/hau-35.jpg",'1000','667','<a href="http://www.worldartwanderer.portfoliobox.me/">Photo by Edward Moon-Little</a>'],
        ["images/backgrounds/hau-49.jpg",'1600','1200','<a href="http://lorenzoferrarini.com/">Photo by Lorenzo Ferrarini</a>']
    );
    var rn = Math.floor(Math.random()*(img_bg.length));
    $('#credits').empty().prepend(img_bg[rn][3]);

$(function () {
    
var img = new Image();
  
  // wrap our new image in jQuery, then:
  $(img)
    // once the image has loaded, execute this code
    .load(function () {
      // set the image hidden by default    
      $(this).hide();
    
      // with the holding div #loader, apply:
      $('#photos')
        // remove the loading class (so no background spinner), 
        // .removeClass('loading')
        // then insert our image
        .append(this);
        imgwidth = img_bg[rn][1];
        imgheight = img_bg[rn][2];
//imgwidth = $('#photos img').attr('width');
//imgheight = $('#photos img').attr('height');
         _imgratio =  imgwidth / imgheight;
        sizeimage(_imgratio,1);
        
      // fade our image in to create a nice effect
      $(this).fadeIn();
          })
    
    // if there was an error loading the image, react accordingly
    .error(function () {
      // notify the user that the image could not be loaded
    })
    
    // *finally*, set the src attribute of the new image to our image
    .attr('src', img_bg[rn][0]);
//    if (rn == (img_bg.length - 1)) {
//        rn1 = 0;
//    } else {
//        rn1 = rn + 1;
//    }
//    $('#photos2').empty().prepend('<img src="'+img_bg[rn1][0]+'">');
//nextphoto();
    setTimeout(nextphoto(),9000);
});
    function sizeimage(imgratio,resize){
        var windowwidth = $('body').width();
        var showwidth = windowwidth;
        var windowheight = $(window).height();
        var showheight = windowheight;
        var showratio = showwidth / showheight;
        $('#photos').css({'width':windowwidth+'px','height':windowheight+'px'});
        if ( imgratio > showratio ) {
//            console.log('>'+imgratio);
            // use height
            var setwidth = showheight * imgratio;
            var showtop = ((windowheight-showheight)/2);
            var showleft = ((windowwidth-setwidth)/2);
            if (resize == 1) {
                $('#photos img').width(setwidth+'px').height(showheight+'px');
            } else {
                $('#photos img').css({width:setwidth+'px',height:showheight+'px',marginTop:showtop+'px',marginLeft:showleft+'px'}, 100);
            }
        } else {
//            console.log('<'+imgratio);
            // use width
            var setheight = showwidth / imgratio;
//            var showtop = ((windowheight-setheight)/2);
            var showtop = 0;
            var showleft = ((windowwidth-showwidth)/2);
            if (resize == 1) {
                $('#photos img').width(showwidth+'px').height(setheight+'px');
            } else {
                $('#photos img').css({width:showwidth+'px',height:setheight+'px',marginTop:showtop+'px',marginLeft:showleft+'px'}, 100);
            }
        }
    };
    
//    $('#photos img').load(function() {
//    });
    $(window).resize(function() {
        sizeimage(_imgratio,0);
    });
    function nextphoto() {
        clearTimeout(t);
//        $('#photos2').empty().prepend($('#photos img'));
        if (rn == (img_bg.length - 2)) {
            rn = 0;
        } else {
            rn = rn + 1;
        }
        $('#photos2').empty().prepend('<img src="'+img_bg[rn][0]+'">');
        $('#photos2 img').load(function() {
            $('#photos').fadeTo(700, 0, function() {
            //    $('#photos').fadeOut(100);
                
//                if (rn == (img_bg.length - 1)) {
//                    rn = 0;
//                } else {
//                    rn = rn + 1;
//                }
                $('#photos').empty().prepend('<img src="'+img_bg[rn][0]+'">');
                                $('#credits').empty().prepend(img_bg[rn][3]);
            //    $('#photos-info .info').empty().prepend(img_bg[rn][2]);
                $('#photos img').load(function() {
                    imgwidth = img_bg[rn][1];
                    imgheight = img_bg[rn][2];
                    _imgratio =  imgwidth / imgheight;
                    sizeimage(_imgratio,0);
                    $('#photos').fadeTo(700,1);
                //    $('#photos').fadeIn(700);
                    t=setTimeout(nextphoto,5000);
                    
                });    
            });
        });
    }
    function showhide() {
        $('.show').fadeOut(400,"linear", function(){
            $(this).removeClass('show').addClass('hide');
        });
        $('.hide').fadeIn(400,"linear", function(){
            $(this).removeClass('hide').addClass('show');
        });
    }

// a function to cycle through the slideshow by clicking on the photos    

});
