let images = ['img/z1.jpg', 'img/z2.jpg', 'img/z3.jpg'];

function loadImages() {
    for (let i = 0; i < images.length; i++) {

        document.getElementById('photo-box').innerHTML += /*html*/`
            <div onclick="popupImage(${i})" class="imgbox">
                <img src='${images[i]}'>
            </div>
        `;
    }
}

function popupImage(i) {
    document.getElementById('photo-box').innerHTML = ``;

    document.getElementById('photo-box').innerHTML += /*html*/`

            <div>
                <img src='${images[i]}' class="img-container"> 
            </div>
    `;
}
