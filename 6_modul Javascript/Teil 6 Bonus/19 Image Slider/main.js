function startSlider() {
    setTimeout(function () {
        document.getElementById('img-1').style = 'transform: translateX(-100%)';
        document.getElementById('img-2').style = 'transform: translateX(0)';
        document.getElementById('img-3').style = 'transform: translateX(100%)';

    }, 3000);

    setTimeout(function () {
        document.getElementById('img-1').style = 'transform: translateX(-200%)';
        document.getElementById('img-2').style = 'transform: translateX(-100%)';
        document.getElementById('img-3').style = 'transform: translateX(0)';

    }, 6000);

    setTimeout(function () {
        document.getElementById('img-1').style = 'transform: translateX(0)';
        document.getElementById('img-2').style = 'transform: translateX(100%)';
        document.getElementById('img-3').style = 'transform: translateX(200%)';
        
        startSlider()

    }, 9000);



}