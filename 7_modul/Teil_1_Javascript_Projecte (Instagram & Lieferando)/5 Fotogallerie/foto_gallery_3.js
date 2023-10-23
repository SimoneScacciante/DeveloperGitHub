let images = ['img/z1.jpg', 'img/z2.jpg', 'img/z3.jpg', 'img/z4.jpg', 'img/z5.jpg', 'img/z6.jpg'];



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
   
    <div id='full-overlay'>


        <div> 
            
        <img id="full-img" src='${images[i]}' class="imgContainer"> 

            <img onclick='backtoOverview()' 
             id="backspace-icon"
             class="backspace"
             src="/icon/close.ico" alt="backspace">
             
        </div>

    `;
}



function backtoOverview() {
    document.getElementById('full-overlay').classList.add('d-none');
    loadImages();

}



