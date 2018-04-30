/**
 * @name:   to-top-button.js
 * @desc:   script to allow scroll to the top of the page
 */


(function () {


    /**
     * @name:   scrollBtn()
     * @desc:   Scrolling to-top button appears
     */
    //#to-top button appears after scrolling -----------------------------------------------------------------------///

    function scrollBtn() {
        var
            fixed = false ;

        jQuery(document).scroll(function() {
            if (jQuery(this).scrollTop() > 250) {
                if (!fixed) {
                    fixed = true;
                    // jQuery('#to-top').css({position:'fixed', display:'block'});
                    jQuery('#to-top').show("slow", function() {
                        jQuery('#to-top').css({
                            position: 'fixed',
                            display: 'block'
                        });
                    });
                } // if (!fixed)
            } else {
                if (fixed) {
                    fixed = false;
                    jQuery('#to-top').hide("slow", function() {
                        jQuery('#to-top').css({
                            display: 'none'
                        });
                    });
                } // if
            } // else
        }); //scroll
    } //scrollBtn



    /**
     * @name:   navScroll()
     * @desc:   Automatic Nav - When clicked scrolls down to section of page
     */

    function navScroll() {
        jQuery(".navTop").on("click",
            // capturing the event
            function(evt){
                // disabling anchors default behaviour
                evt.preventDefault();

                // fetching the element we clicked on
                console.log( jQuery(this).attr("href") );


                var t = jQuery(this).attr("href");


                //animating the whole content of the website
                jQuery("html, body").animate(
                    // object with params
                    {
                        "scrollTop" :
                        jQuery(t)
                            .offset().top -45
                    },
                    // duration
                    1000

                ); // animate
            } //function
        ); //.navTop
    } //navScroll




    function initialiser(){
        scrollBtn();
        navScroll();

    }//init


    window.addEventListener("load", initialiser);

})();