let images = ['img/z1.jpg', 'img/z2.jpg', 'img/z3.jpg', 'img/z4.jpg', 'img/z5.jpg', 'img/z6.jpg'];



function loadImages() {
    for (let i = 0; i < images.length; i++) {

        document.getElementById('photo-box').innerHTML += /*html*/`

          <div onclick='popupImage(${i})' class="imgbox">  <!-- Warum reicht hier nicht nur ein i aus?? -->
                <img src='${images[i]}'>
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
             class="backspace" 
             src="/icon/close.ico" alt="backspace">

        </div>

        <div class="left-arrow">
            <img onclick='moveBackward(${i})' 
            src="/icon/left_small.ico">
        </div>
       
        <div class="right-arrow">
            <img onclick='moveForward(${i})' 
            src="/icon/right_small.ico">
        </div>

    </div>
    `;
}




function backtoOverview() {
    document.getElementById('full-overlay').classList.add('d-none');
    loadImages();

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


// Mensch               1           2               3           4               5           6
// Maschine             0           1               2           3               4           5
//  let images = ['img/z1.jpg', 'img/z2.jpg', 'img/z3.jpg', 'img/z4.jpg', 'img/z5.jpg', 'img/z6.jpg'];



