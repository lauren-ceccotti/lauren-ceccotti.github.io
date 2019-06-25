// (function($) {
//     $(document).ready(function() {
//
//     }); // doc ready
// })(jQuery);



var windowH = $(window).height();
var windowW = $(window).width();
var modeMobile;

function detectScreensize() {
    var windowW = $(window).width();
    if(windowW > 1024){
        $('body').removeClass('tablet');
        $('body').addClass('desktop');
        modeMobile = false;
    }else if(windowW <= 1024){
        $('body').addClass('tablet');
        $('body').removeClass('desktop');
        modeMobile = true;
    }
}
detectScreensize()
console.log("modeMobile : " + modeMobile, windowW);






//////   BACKGROUNDS

var homeColors = "#994AFC, #64E1E7, #DAF100, #EC4056";
var projectsColors = "#64E1E7, #74B1ED, #8580F4, #994AFC";
var skillsColors = "#994AFC, #B446C4, #D0438D, #EC4056";
var aboutColors = "#DAF100, #B3EB4B, #87E5A2, #64E1E7";
var contactColors = "#EC4056, #E48434, #DEC117, #DAF100";





//////   HOME


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


// quit home FAKE AJAX

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




//////   MAIN-MENU DESKTOP


// open/close hover menu

var tl_toggleMenu = new TimelineMax({paused:true});
   tl_toggleMenu.to(".nav-items", 0, {height: 'auto'})
    .staggerTo(".main-nav li", 0.5, {opacity: 1}, 0.2, 0.1)
    //staggerTo(el, transition d {prop:val} d-inter-el, delay-before-stag)

   $(".desktop #logo").mouseenter(function(){
       tl_toggleMenu.play();
       $(".main-nav").removeClass('folded');
   });
   $(".desktop .main-nav").mouseleave(function(){
       tl_toggleMenu.reverse();
       $(this).addClass('folded');
   });



   // quit page anim

   function pagetoOther(colors) {
       tl_pagetoOther = new TimelineMax(),
       tl_pagetoOther.to(".fancy-line", 1, {scale: 0})
       .to(".losange", 1, {opacity: 0, rotation: 360}, 0)
       .to(".page, .main-nav", 0.5, {opacity: 0}, 0.5)
       .to('body', 1, {backgroundImage: "linear-gradient("+colors+")"}, 0.5)
   }





//////   MAIN-MENU TABLET


// animation open/close tablet menu

var tl_tabletMenu = new TimelineMax({paused:true});
  tl_tabletMenu.to("body", 0, {overflow: 'hidden'})
  .to(".nav-items", 0, {display: 'flex'})
  .to("#logo", 0, {display: 'none'})
  .to(".cross", 0, {display: 'block'})
  .to(".overlay", 0, {display: 'block'})
  .to(".overlay", 1, {top: -300},0)
  .to(".overlay", 1, {right: -300},0)
  .to("#logo", 0.5, {opacity: 0},0)
  .to(".cross", 0.5, {opacity: 1},0)
  .staggerTo(".main-nav li", 0.5, {opacity: 1}, 0.2, 0.5)





    $(".tablet #logo").click(function(){
        tl_tabletMenu.duration(1);
        tl_tabletMenu.play();
        $(".main-nav").removeClass('folded');
    });

    $(".tablet .cross").click(function(){
        tl_tabletMenu.duration(0.6);
        tl_tabletMenu.reverse();
      $(".main-nav").addClass('folded');
    });


////// QUIT page function FAKE AJAX

$('.main-nav a').on('click', function(event) {
    event.preventDefault();
    var link = $(this).attr('href');
    var name = $(this).attr('data-name');
    name = name + "Colors";
    name = eval(name);

    function quitPage() {
        window.location.href = link;
    }

    if(modeMobile == false){

        console.log("falsemodeMobile : " + modeMobile, windowW);
        pagetoOther(name)
        tl_pagetoOther.eventCallback("onComplete", quitPage);

    }else if(modeMobile == true){
        console.log("tl_tabletMenu modeMobile : " + modeMobile, windowW);
        tl_tabletMenu.duration(0.6);
        tl_tabletMenu.reverse();
        pagetoOther(name);
        tl_pagetoOther.delay(0.5)
        tl_tabletMenu.eventCallback("onComplete", tl_pagetoOther);
        tl_pagetoOther.eventCallback("onComplete", quitPage);

    }
});





var input = $('.balloon');

function floatLabel(inputType){

	$(inputType).each(function(){

		var $this = $(this);
		// on focus add cladd active to label
		$this.focus(function(){
			$this.addClass('active');
		});
		//on blur check field and remove class if needed
		$this.blur(function(){
			if($this.val() === '' || $this.val() === 'blank'){
				$this.removeClass('active');
			}
		});

	});
}
floatLabel(input);




$(window).resize(function () {
	detectScreensize();
});
