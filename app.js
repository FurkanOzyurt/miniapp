$(document).ready(function(e) {
    let left_animation = $('.animation-container').position().left;
    let top_animation = $('.animation-container').position().top;
    function tellPos(p){
        let x = p.pageX;
        let y = p.pageY;
        //console.log('---------------------');
        //console.log('Position X : ' + x );
        //console.log('Position Y : ' + y);
        //console.log('Div Left : ' + $('.animation-container').position().left);
        //console.log('Div Right : ' + ($('.animation-container').position().left + $('.animation-container').width()));
        //console.log('Div Top : ' + $('.animation-container').position().top);
        //console.log('Div Bottom : ' + ($('.animation-container').position().top + $('.animation-container').height()));
        //console.log('---------------------');
        let animationLeft;
        let animationTop;
        let limit = 25
        if(left_animation + ($('.animation-container').width() / 2) - p.pageX > 0){
            console.log("TRUE CENTER LEFT");
            animationLeft = (left_animation + ($('.animation-container').width() / 2) - x) / limit;
        }
        if (x - (left_animation + $('.animation-container').width()) + ($('.animation-container').width() / 2) > 0){
            console.log("TRUE CENTER RİGHT");
            animationLeft = (left_animation + ($('.animation-container').width() / 2) - x) / limit;
        }

        if(animationLeft < -limit){
            animationLeft = -limit;
        }
        if(animationLeft > 25){
            animationLeft = limit;
        }

        console.log(top_animation + ($('.animation-container').height() / 2) - y);
        if(top_animation + ($('.animation-container').height() / 2) - y > 0){
            console.log("TRUE CENTER LEFT");
            animationTop = (top_animation + ($('.animation-container').height() / 2) - y) / 25;
        }
        if (x - (top_animation + $('.animation-container').height()) + ($('.animation-container').height() / 2) > 0){
            console.log("TRUE CENTER RİGHT");
            animationTop = (top_animation + ($('.animation-container').height() / 2) - y) / 25;
        }

        if(animationTop < -25){
            animationTop = -25;
        }
        if(animationTop > 25){
            animationTop = 25;
        }
        

        $('.animation-container').animate({
            left: animationTop
        }, {
            step: function( now, fx ) {
                $('.animation-container').css('transform', 'translate(' + animationLeft + 'px, ' + animationTop + 'px)');
            }
        } , 500).stop();
    }
    addEventListener('mousemove', tellPos, false);
})