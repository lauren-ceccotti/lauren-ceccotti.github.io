// (function($) {
//     $(document).ready(function() {
//
//     }); // doc ready
// })(jQuery);





//TweenMax.to('body', 1, {backgroundImage:"linear-gradient(#64E1E7, #74B1ED, #8580F4, #994AFC)", repeat:-1, yoyo:true, repeatDelay:3});











/////////// FROM 2015
// //$('#zone_menu nav a').click(function(event) {
// $('#zone_menu nav a').on('click', function(event) {
//     event.preventDefault();
//     modeactuel= 'modeMenuMini';
//     menu_y = menubottom;
//
//     //var href = this.href;
//     var link = $(this).attr('href');
//     var url = 'index.php?request=ajax&module='+link;
//     var js = 'theme/js/'+link+'.js';
//
//     var addscript = '<script type="text/javascript" src="'+js+'"></script>';
//
//
//     function addJs(){
//         $.ajax({
//             url : js, //on test si fichier existe bien
//             type: 'HEAD',
//             success : function(data){
//                 jQuery.getScript(js);
//             }
//         });
//     }
//
//     function gotoLink() {
//         ////window.location = href;
//         $.ajax({
//             url : url, // Le module correspondant au clic
//             type : 'GET',
//             success : function(content){
//                 $('#content').html(content);
//                 addJs();
//                // history.pushState({key: 'value'}, 'titre', url);
//             }
//         });
//     }
//
//     displaystat = 'none';
//     classMenu();
//
//     TweenMax.to(content, 1, {opacity: 1});
//     animMenu();
//     tl_animMenu.duration( 2 );
//     tl_animMenu.eventCallback("onComplete", gotoLink);
//     menu_y = updateposy;
//     //console.log('clikA updateposy '+updateposy);
//
//
// });
