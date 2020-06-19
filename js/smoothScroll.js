function scrollHome() {
    var elmnt = document.getElementById("section1");
    setTimeout(function(){ elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}); }, 200);
}

function scrollAbout() {
    var elmnt = document.getElementById("section2");
    setTimeout(function(){ elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}); }, 200);
}

function scrollWork() {
    var elmnt = document.getElementById("section3");
    setTimeout(function(){ elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}); }, 200);
}

function scrollContact() {
    var elmnt = document.getElementById("section4");
    setTimeout(function(){ elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}); }, 200);
}

$(document).ready(function () {
    $(window).load(function () {
        setTimeout(function () {
            $('.loader').animate({opacity:'0'})
            $('.preloader p').delay(500).animate({top:'40%', opacity:'0'})
            $('.preloader').delay(900).slideUp(1000);
            $('.showbody').show();
            AOS.refresh();
        }, 800)
    });

    $('.burger, .overlay, .main a').click(function(){
        $('body').toggleClass('fixed');
        $('.burger').toggleClass('clicked');
        $('.overlay').toggleClass('show');
        $('nav').toggleClass('show');
        $('body').toggleClass('overflow');
        $('.burger').toggleClass('visible');
      });

    $(".main li").click(function(event) {
        $('li').removeClass('active');
        $(this).addClass('active');
        event.preventDefault()
    });

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();
        
        $('section').each(function() {
          var top = $(this).offset().top,
              bottom = top + $(this).outerHeight();
          
          if (cur_pos >= top && cur_pos <= bottom) {
            $('nav').find('li').removeClass('active');

            $('nav').find('a[href="#'+$(this).attr('id')+'"]').parent("li").addClass('active');
          }
        });
      });

    $('[data-toggle="tooltip"]').tooltip();   

});