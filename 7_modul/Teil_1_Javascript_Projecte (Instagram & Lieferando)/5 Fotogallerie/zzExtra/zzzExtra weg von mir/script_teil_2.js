let images = ['img/z1.jpg', 'img/z2.jpg', 'img/z3.jpg', 'img/z4.jpg', 'img/z5.jpg', 'img/z6.jpg'];

function render() {

    let content = document.getElementById('TextHier1');

    for (let i = 0; i < images.length; i++) {
        const img = images[i];

        content.innerHTML +=/*html*/ `
        <div> 
            <img src="${img}" class="imgbox_1" onclick="ImageClick(${i})">
        </div>
        `
    }
}

function ImageClick(i) {
    let content = document.getElementById('TextHier1');


    if (i === 0) {
        content.innerHTML = /*html*/ `<img src="img/z1.jpg" class="imgbox_1">
            <div> 
                <a href="/index_teil_2.html">Start</a>
            </div>
            `
            ;
    }

    if (i === 1) {
        content.innerHTML = /*html*/ `<img src="img/z2.jpg">
            <a href="/index_teil_2.html">Start</a>
            `
            ;
    }

    if (i === 2) {
        content.innerHTML = /*html*/ `<img src="img/z3.jpg">
            <a href="/index_teil_2.html">Start</a>
            `
            ;
    }

    if (i === 3) {
        content.innerHTML = /*html*/ `<img src="img/z4.jpg">
            <a href="/index_teil_2.html">Start</a>
            `
            ;
    }
}



