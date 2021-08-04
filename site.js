// Responsive hero
/*----------------------------------------------------*/
/* Quote Loop
------------------------------------------------------

function fade($ele) {
    $ele.fadeIn(1000).delay(3000).fadeOut(1000, function() {
        var $next = $(this).next('.quote');
        fade($next.length > 0 ? $next : $(this).parent().children().first());
    });
}
fade($('.quoteLoop > .quote').first());
 */


// Double Sticky Nav
/*--------------------------------------------*/

// Double sticky nav
window.onscroll = function() { myFunction() };

var title = document.getElementById("title");
var resume = document.getElementById("resume");
var header = document.getElementById("header")
var sticky = title.offsetHeight;
var sticky2 = resume.offsetHeight;

function myFunction() {
    if (window.pageYOffset >= title.offsetTop) {
        title.classList.add("sticky")
    } else {
        title.classList.remove("sticky");
    }


    if (window.pageYOffset >= resume.offsetTop + title.offsetHeight) {
        resume.classList.add("sticky")
    } else {
        resume.classList.remove("sticky");
    }

    // if (window.pageYOffset >= resume.offsetTop - title.offsetHeight) {
    //     // resume.classList.add("sticky2")
    //     resume.classList.remove("sticky2");

    // } else {
    //     resume.classList.remove("sticky2");

    //     // navbar2.classList.add("unsticky")
    // }
}

/*----------------------------------------------------*/
/* Navigation
------------------------------------------------------ 
$(window).scroll(function() {

    var title = document.getElementById("title");
    var resume = document.getElementById("resume");

    if ($(window).scrollTop() >= title.offsetTop) {
        $('#title').addClass('sticky');
    } else if ($(window).scrollTop() + title.offsetTop >= resume.offsetTop) {
        $('#title').removeClass('sticky');
        $('#title').addClass('inline-left').add;

        $('#resume').addClass('sticky');
        $('#resume').addClass('inline-right');

    } else {

        $('#resume').removeClass('sticky');

    }
});
*/
// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_nav').hasClass('open-nav')) {
        $('.main_nav').removeClass('open-nav');
    } else {
        $('.main_nav').addClass('open-nav');
    }
});

$('.main_nav li a').click(function() {
    if ($('.main_nav').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_nav').removeClass('open-nav');
    }
});



/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

jQuery(document).ready(function($) {

    $('.smoothscroll').on('click', function(e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 800, 'swing', function() {
            window.location.hash = target;
        });
    });

});


TweenMax.staggerFrom(".title", 0.8, { opacity: 0, y: 20, delay: 0.2 }, 0.4);
TweenMax.staggerFrom(".nav", 0.8, { opacity: 0, y: 20, delay: 0.4 }, 0.4);