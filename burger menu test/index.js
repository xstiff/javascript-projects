const menu = document.querySelector(".burger-menu");
let toggle = false; // Is open menu

let dur_fade = 100;

menu_a = anime({ // First
    targets: '#line-1',
    begin: () => {
    },
    autoplay: false,
    easing: 'easeOutCubic',
    translateY: '16px',
    rotateZ: '45deg',
    duration: 200,
})

menu_b = anime({ // Third
    targets: '#line-3',
    autoplay: false,
    easing: 'easeOutCubic',
    translateY: '-16px',
    rotateZ: '-45deg',
    complete: () => {
        reverse_menu();
    },
    duration: 200,
})

menu_c = anime({ // Second
    targets: '#line-2',
    autoplay: false,
    easing: 'linear',
    opacity: 0,
    duration: 200,
})





slide_in_out = anime({
    autoplay: false,
    easing: 'linear',
    targets: ".slide-menu",
    width: '20%',
    duration: 200,
})


reverse_menu = () => { // Toggle function for menu
    menu_a.reverse();
    slide_in_out.reverse();
    menu_c.reverse();
    menu_b.reverse();
    
    switch (toggle) {
        case false: toggle = true; break
        case true: toggle = false; break
    }

}




menu.addEventListener('click', () => { // Core function
    if(toggle == false) {
        dur_fade = 5000;
        text_fade.play();
        slide_in_out.play();
        menu_a.play();
        menu_c.play();
        menu_b.play();
    }
    if(toggle == true) {
        dur_fade = 100;
        slide_in_out.play();
        menu_a.play();
        text_fade.play();
        menu_c.play();
        menu_b.play();
        
    }
    
})
