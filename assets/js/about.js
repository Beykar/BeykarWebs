function sportsRotate(btn){
    var $card = $(btn).closest('.flip-container');
    //console.log($card);
    if($card.hasClass('hover')){
        $card.removeClass('hover');
    } else {
        $card.addClass('hover');
    }
}