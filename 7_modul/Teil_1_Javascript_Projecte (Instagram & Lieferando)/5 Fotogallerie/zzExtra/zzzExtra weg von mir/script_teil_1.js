let images = ['/img/z1.jpg', '/img/z2.jpg', '/img/z3.jpg', '/img/z4.jpg', '/img/z5.jpg', '/img/z6.jpg'];

function render() {

    let content = document.getElementById('TextHier1');

    for (let i = 0; i < images.length; i++) {
        const img = images[i];

        content.innerHTML +=/*html*/ `
        <div> 
            <img src="${img}" class="imgbox" onclick="ImageClick(${i})">
            <!--diese CSS Klasse wirkt sich direkt auf das Bild, Alles was CSS Bild betrifft hier einfügen "imgbox" -->
        </div>
        `
    }
}

function ImageClick(i) {

    if (i === 0) {
        alert("Bild 1 angeklickt!");
    }

    if (i === 1) {
        alert("Bild 2 angeklickt!");
    }

    if (i === 2) {
        alert("Bild 3 angeklickt!");
    }

    if (i === 3) {
        alert("Bild 4 angeklickt!");
    }

    if (i === 4) {
        alert("Bild 4 angeklickt!");
    }

}

