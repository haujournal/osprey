$(document).ready(function(){
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
    $('header').css('background-image', 'url(../' + img_bg[rn][0] + ')');

});
