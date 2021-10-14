window.onscroll = function() {
    var y = window.scrollY;
    aux = y * 1.4

    if (window.scrollY > 60) {
        auxTranslate = Math.round(((1 / aux) * 1000))
        console.log('auxTranslate');
        console.log(auxTranslate);
        var scene = document.getElementById('scene');
        var mov = 100 - auxTranslate;
        console.log('mov');
        console.log(mov);
        mov = (mov - 90) * 3
        scene.style.cssText = `
            width : ${ aux }vmin; 
            height : ${ aux }vmin; 
            transform: translate(${ 50 -  mov }%, 0%)`;

        console.log(aux);

    }


};