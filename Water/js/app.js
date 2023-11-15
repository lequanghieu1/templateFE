var btn_scroll = document.getElementById("block-btn-scroll");
var select_box = document.getElementById("field-value");

window.onload = function() {
    btn_scroll.addEventListener("click", function() {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
         
    });

   
    
    window.addEventListener('scroll', function() {
        var position_animation = window.scrollY;
        var size_width_screen = window.screen.width;
        var reason = document.getElementsByClassName('box-icon');

        if ( position_animation >= 20) { 
            btn_scroll.style.display = 'flex';
        } else {
            btn_scroll.style.display = 'none';
        }

        if ( position_animation >= 300) {
            for(var i = 0; i < reason.length; i++) {
                reason[i].classList.add('box-icon-animation');
                reason[i].style.animationDelay = (i + 1) * 0.5 + 's';
            }
        }
    });
}