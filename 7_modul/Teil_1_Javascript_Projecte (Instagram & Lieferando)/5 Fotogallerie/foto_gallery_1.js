let images = ['img/z1.jpg', 'img/z2.jpg', 'img/z3.jpg'];


function popupImage(i) {
    document.getElementById('photo-box').innerHTML = /*html*/`

        <div class="imgbox">
            <img  src='${images[i]}'> 
        </div>
    `;
}





