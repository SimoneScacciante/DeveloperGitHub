let images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg', 'img/11.jpg', 'img/12.jpg', 'img/13.jpg', 'img/14.jpg', 'img/15.jpg', 'img/16.jpg', 'img/17.jpg', 'img/18.jpg', 'img/19.jpg', 'img/20.jpg', 'img/21.jpg', 'img/22.jpg', 'img/23.jpg', 'img/24.jpg', 'img/25.jpg', 'img/26.jpg', 'img/27.jpg', 'img/28.jpg', 'img/29.jpg', 'img/30.jpg', 'img/31.jpg'];



function loadImages() {
    for (let i = 0; i < images.length; i++) {

        document.getElementById('photo-box').innerHTML += /*html*/`

          <div onclick='popupImage(${i})' class="imgbox">  
                <img src='${images[i]}' class="imgLoadImages">
          </div>
`;
    }
}


function popupImage(i) {

    document.getElementById('photo-box2').innerHTML = /*html*/`
  

    <div onclick='backtoOverview()' id='full-overlay' class="overlay"> 

        <div class="backspace-container">
                <img onclick='backtoOverview()'
                class="backspace" 
                src="./icon/close.ico" alt="backspace">
        </div>
        
        <div onclick="event.stopPropagation()" class="radius30px">   

            <img id="full-img" src='${images[i]}'   class="imgPopup"> 
            



            <div class="left-arrow">
                <img onclick='moveBackward(${i})' 
                 src="./icon/left_small_1.ico" class="arrow-img"> 
            </div>

            
            <div class="right-arrow">
                <img onclick='moveForward(${i})' 
                src="./icon/right_small_2.ico" class="arrow-img">
            </div>

        </div>

    </div>

    `;
}




function backtoOverview() {
    document.getElementById('full-overlay').classList.add('d-none');

}


function moveBackward(i) {
    if (i > 0) {
        i--;
    } else {
        i = images.length - 1;  // wenn du Bild 1 siehst (für Maschine Position 0) 
    }                           // dann tritt else fall auf, else besagt das gesamte
    // länge bzw. alle Bilder 31 (Mensch) - 1 = 30 (Mensch)
    // 30 ist Endergebnis und 30 (Mensch) ist dann 30 als i = (Maschine)
    // du könntest bei else auch schreiben: i = 30 (führt zum selben Ergebnis)
    popupImage(i);
}



function moveForward(i) {
    if (i < images.length - 1) {
        i++;

    } else {
        i = 0;
    }

    popupImage(i);
}

