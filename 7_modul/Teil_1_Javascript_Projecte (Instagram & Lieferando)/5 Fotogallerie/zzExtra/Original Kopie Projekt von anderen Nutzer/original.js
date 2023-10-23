let images = ['img/z1.jpg', 'img/z2.jpg', 'img/z3.jpg'];



function loadImages() {
    for (let i = 0; i < images.length; i++) {
        document.getElementById('photo-box').innerHTML += /*html*/`
          <div onclick='popupImage(${i})' class="imgbox"><img src='${images[i]}'>
          </div>

`;
    }


}


function popupImage(i) {
    document.getElementById('photo-box').innerHTML = /*html*/`
   
    <div id='full-overlay' class="overlay">


        <div class="img-container"><img id="full-img" src='${images[i]}'> 

            <img onclick='backtoOverview()' 
             id="backspace-icon" 
             class="backspace" 
             src="./img/x-mark.ico" alt="backspace">
         </div>


         <div class="left-arrow"><img id="left-arrow-pic" onclick='moveBackward(${i})' src="/icon/left_small.ico">
        </div>
       
        <div class="right-arrow"><img id="right-arrow-pic" onclick='moveForward(${i})' src="./icon/right_small.ico">
        </div>

    </div>
    `;
}


function moveBackward (i) {
if (i > 0) {
    i--;
} else {
    i = 0;
}

popupImage(i);

}


function moveForward (i) {
    if (i < images.length - 1) {
        i++;

    } else {
        i = 0;
    }

    popupImage(i);
}


function backtoOverview() {
    document.getElementById('full-overlay').classList.add('d-none');
    loadImages();

}