/**
 * @name    script.js
 * @desc    script that handles the 'Read More' button
 *
 */

(function(){
    var

        $shareBtn           =   jQuery('#shareBtn'),

        changeGlyf          =   function(){

            var
                acctGlyf    = jQuery(this).find('b:first')
            ;
            if (acctGlyf.hasClass('glyphicon glyphicon-chevron-up')) {
                acctGlyf.removeClass('glyphicon glyphicon-chevron-up');
                acctGlyf.addClass('glyphicon glyphicon-chevron-down');

            } else if (
                acctGlyf.hasClass('glyphicon glyphicon-chevron-down')) {
                acctGlyf.removeClass('glyphicon glyphicon-chevron-down');
                acctGlyf.addClass('glyphicon glyphicon-chevron-up');
            }

        },//changeGlyf



        readMoreFoo        =   function (par, btn) {

            par
                .slideToggle("slow")
                .toggleClass("visible");
            if (par.hasClass("visible")){
                btn.html("Read Less... ");
            } else {
                btn.html("Read More... ");
            }
        },//readMoreFoo


        arrowUp = function () {
            //Check to see if the window is top if not then display button
            jQuery(window).scroll(function(){
                if (jQuery(this).scrollTop() > 100) {
                    jQuery('.scrollToTop').fadeIn();
                } else {
                    jQuery('.scrollToTop').fadeOut();
                }
            });

            //Click event to scroll to top
            jQuery('.scrollToTop').click(function(e){
                e.preventDefault();
                jQuery('html, body').animate({scrollTop : 0},800);
                return false;
            });

        },//arrowUp


       openMenu    = function(){

           jQuery('.menu-link').toggleClass("hidden");
           jQuery(".menu-opener").click(function(){
               jQuery(".menu-opener, .menu-opener-inner, .menu").toggleClass("active");
               jQuery('.menu-link').removeClass("hidden");
                });
                // Closes the Responsive Menu on Menu Item Click
           jQuery('.menu-link').on('click', function (){
               jQuery(".menu-opener, .menu-opener-inner, .menu").removeClass("active");
               jQuery('.menu-link').toggleClass("hidden");
            });

        }, //openMenu

        flipCard  =   function(){
            jQuery('.container-3d').click(function(){
                jQuery(this).toggleClass('flipped');
                jQuery('.container-3d').not(jQuery(this)).removeClass('flipped');
            });
        },//flipCard


        bindBtns   =   function () {

            openMenu();
            flipCard();
            arrowUp();
            $shareBtn.click(changeGlyf);

        },//bindBtns

        init        =   function(){
            bindBtns();
        }//init
    ;
    window.addEventListener("load", init);
})();