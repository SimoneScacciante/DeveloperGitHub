let images = ['img/img2/20.jpg', 'img/img2/21.jpg', 'img/img2/22.jpg', 'img/img2/23.jpg', 'img/img2/24.jpg', 'img/img2/25.jpg', 'img/img2/26.jpg', 'img/img2/27.jpg', 'img/img2/28.jpg', 'img/img2/29.jpg', 'img/img2/30.jpg', 'img/img2/31.jpg', 'img/img2/32.jpg', 'img/img2/33.jpg', 'img/img2/34.jpg', 'img/img2/35.jpg', 'img/img2/36.jpg', 'img/img2/37.jpg', 'img/img2/38.jpg', 'img/img2/39.jpg', 'img/img2/40.jpg', 'img/img2/41.jpg', 'img/img2/42.jpg', 'img/img2/43.jpg', 'img/img2/44.jpg', 'img/img2/45.jpg', 'img/img2/46.jpg', 'img/img2/47.jpg', 'img/img2/48.jpg', 'img/img2/49.jpg', 'img/img2/50.jpg'];



function loadImages() {
    for (let i = 0; i < images.length; i++) {

        document.getElementById('photo-box').innerHTML += /*html*/`

          <div onclick='popupImage(${i})' class="imgbox">  
                <img src='${images[i]}' class="imgLoadImages">
          </div>
`;
    }
}

                              /* habe photo-box2 ID geändert sonst wird überschrieben, jetzt erscheinen Bilder im Hintergrund */
function popupImage(i) {   
    
    document.getElementById('photo-box2').innerHTML = /*html*/`
  

    <div onclick='backtoOverview()' id='full-overlay' class="overlay"> 
        <!-- backtoOverview wirkt sich auf kompletten Lila Container und alle Inhalte aus -->
        
        <div onclick="event.stopPropagation()">   
            <!-- durch stopPropagation wirkt sich übergeordnete Funktion  
            sich NICHT mehr auf diesen Container, aber es wirkt sich auf Lila Container aus -->

            <img id="full-img" src='${images[i]}'   class="imgPopup"> 
            
            <img onclick='backtoOverview()'
            class="backspace" 
            src="./icon/close.ico" alt="backspace">


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

    <!-- stopPropagation = Immer wenn du Div in einer Div hast und du setzte deine Funktion der Übergeordneten Div

    bsp:    <div onclick="backToOverview()">    
                <div>
                        [BILD]
                </div>

            </div>

Dann führt das immer dazu das alle Container die der Übergeordneten DIV unterstellt sind auch diese Funktion bekommen
Um das zu verhindern musst du "stopPropagation" setzten, das verhindert das voheriger Container Funktion ausgeführt wird

-->

    `;
}




function backtoOverview() {
    document.getElementById('full-overlay').classList.add('d-none');
     // loadImages() kann nun entfernt werden!!!

}


function moveBackward(i) {
    if (i > 0) {
        i--;
    } else {
        i = 0;  /* Alternative im else schreibe [ i = images.length - 1;] für mehr info seiehe "foto_gallery_7.js"*/
    }




    popupImage(i);

}

// index = immer Maschinen Zählung
// images.length = immer Mensch Zählung, bezieht sich auf Array länge zählen beginnt ab 1

//let images = ['img/z1.jpg', 'img/z2.jpg', 'img/z3.jpg', 'img/z4.jpg', 'img/z5.jpg', 'img/z6.jpg'];   =  images.length = 6 somit..

//     if (i < 6 - 1)  ((images.length im array oben ist immer die zahl 6, da inhalt immer gleich bleibt, aber i hängt davon ab welches bild du gerade anschaust und hier ist immer Maschinen Zahl also 0-5))
//



function moveForward(i) {
    if (i < images.length - 1) {
        i++;

    } else {
        i = 0;
    }

    popupImage(i);
}

