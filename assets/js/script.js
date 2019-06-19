// (function($) {
//     $(document).ready(function() {
//
//     }); // doc ready
// })(jQuery);



var windowH = $(window).height();
var windowW = $(window).width();
var modeMobile;

function detectScreensize() {
    var windowH = $(window).height();
    var windowW = $(window).width();

    if(windowW >= 769){
        modeMobile = false;
    }else if(windowW < 769){
        modeMobile = true;
    }
}

detectScreensize()
console.log("modeMobile : " + modeMobile, windowW);



//////   MENU

var toggleMenu = new TimelineMax({paused:true});
   toggleMenu.to(".nav-items", 0, {height: 'auto'})
    .staggerTo(".main-nav li", 0.5, {opacity: 1}, 0.2, 0.1)
    //staggerTo(el, transition d {prop:val} d-inter-el, delay-before-stag)

   $("#logo").mouseenter(function(){
       toggleMenu.play();
       $(".main-nav").removeClass('folded');
   });
   $(".main-nav").mouseleave(function(){
       toggleMenu.reverse();
       $(this).addClass('folded');
   });


var homeColors = "#994AFC, #64E1E7, #DAF100, #EC4056";
var projectsColors = "#64E1E7, #74B1ED, #8580F4, #994AFC";
var skillsColors = "#994AFC, #B446C4, #D0438D, #EC4056";
var aboutColors = "#DAF100, #B3EB4B, #87E5A2, #64E1E7";
var contactColors = "#EC4056, #E48434, #DEC117, #DAF100";


//////   FAKE AJAX


// quit home anim

function hometoOther(colors) {
    tl_hometoOther = new TimelineLite(),
    tl_hometoOther.to(".menu-home img", 1, {rotation: 360, scale: 0.1})
    .to(".menu-home img", 0.5, {opacity: 0}, '-=0.8')
    .to(".menu-home li", 0.5, {opacity: 0}, '-=0.6')
    .to("section:first-of-type p", 0.5, {opacity: 0}, '-=0.4')
    .to("section:first-of-type h1", 0.5, {opacity: 0}, '-=0.4')
    .to("nav.links", 0.3, {opacity: 0},'-=0.4')
    .to('body', 1, {backgroundImage: "linear-gradient("+colors+")"})
}


// quit home links

$('.menu-home a').on('click', function(event) {
    event.preventDefault();
    var link = $(this).attr('href');
    var name = $(this).attr('data-name');
    name = name + "Colors";
    name = eval(name);

    function quitHome() {
        window.location.href = link;
        console.log('quitHome');
    }

    hometoOther(name);
    tl_hometoOther.eventCallback("onComplete", quitHome);

});



// quit page anim

function pagetoOther(colors) {
    tl_pagetoOther = new TimelineLite(),
    tl_pagetoOther.to(".fancy-line", 1, {scale: 0})
    .to(".losange", 1, {opacity: 0, rotation: 360}, '-=1')
    .to('body', 1, {backgroundImage: "linear-gradient("+colors+")"})
    .to(".page, .main-nav", 0.5, {opacity: 0})
}


// quit page links

$('.main-nav a').on('click', function(event) {
    event.preventDefault();
    var link = $(this).attr('href');
    var name = $(this).attr('data-name');
    name = name + "Colors";
    name = eval(name);

    function quitPage() {
        window.location.href = link;
    }

    pagetoOther(name);
    tl_pagetoOther.eventCallback("onComplete", quitPage);

});
