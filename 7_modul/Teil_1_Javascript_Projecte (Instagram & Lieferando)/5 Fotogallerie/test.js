async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}

//
// images
//
let images = ['img/img2/20.jpg', 'img/img2/21.jpg', 'img/img2/22.jpg', 'img/img2/23.jpg', 'img/img2/24.jpg', 'img/img2/25.jpg', 'img/img2/26.jpg', 'img/img2/27.jpg', 'img/img2/28.jpg', 'img/img2/29.jpg', 'img/img2/30.jpg', 'img/img2/31.jpg', 'img/img2/32.jpg', 'img/img2/33.jpg', 'img/img2/34.jpg', 'img/img2/35.jpg', 'img/img2/36.jpg', 'img/img2/37.jpg', 'img/img2/38.jpg', 'img/img2/39.jpg', 'img/img2/40.jpg', 'img/img2/41.jpg', 'img/img2/42.jpg', 'img/img2/43.jpg', 'img/img2/44.jpg', 'img/img2/45.jpg', 'img/img2/46.jpg', 'img/img2/47.jpg', 'img/img2/48.jpg', 'img/img2/49.jpg', 'img/img2/50.jpg'];
let trash = [];
load();
function render() {
    for (i = 0; i < images.length; i++) {
        let image = images[i];
        document.getElementById('images').innerHTML += /*html*/`
        <div class="imgBoxHelp">
              <img class="imgBox" src="${image}" onclick="enlarge('${i}'), show('darkBackground')">
               <img src="./img/trash-solid2.png" class="trashSymbolWhiteSmall" onclick="deleteImage('${i}')">
               </div>
        `
    }
}

function enlarge(i) {
    let image = images[i];
    document.getElementById('imgBoxZoom').innerHTML = /*html*/`
    <img src="${image}">
    <img class="trashSymbolWhite" id="deleteImage" onclick="deleteImage('${i}')" src="./img/trash-solid2.png">
    
    <img onclick="back('${i}')" src="./img/arrowleft.png" class="arrowleft">
    <img onclick="next('${i}')" src="./img/arrowright.png" class="arrowright">
        `
}

function deleteImage(position) {
    // falls beim löschen zurück gegangen werden scroll, dann hide('darkbackground') aktivieren und position--; und next(position); auskommentieren
    // hide('darkBackground');
    let deleteImages = images.splice(position, 1);
    position--;
    next(position);

    trash.push(deleteImages);
    console.log(deleteImages);

    document.getElementById('images').innerHTML = '';
    save();
    render();
}

function next(i) {
    i++;
    if (images.length == 0) {
        hide('darkBackground');
    }
    if (i >= images.length) {
        i = 0;
    }
    enlarge(i);
}

function back(i) {
    i--;
    if (i < 0) {
        i = images.length - 1;
    }
    enlarge(i);
}

function save() {
    let imagesAsText = JSON.stringify(images);
    localStorage.setItem('images', imagesAsText);

    let trashAsText = JSON.stringify(trash);
    localStorage.setItem('trash', trashAsText)
}
function load() {
    let imagesAsText = localStorage.getItem('images');
    let trashAsText = localStorage.getItem('trash');

    if (imagesAsText) {
        images = JSON.parse(imagesAsText);
    }
    if (trashAsText) {
        trash = JSON.parse(trashAsText);
    }
}

//
// Trash
//
function trashRender() {
    for (i = 0; i < trash.length; i++) {
        console.log(trash);
        let trashImage = trash[i];
        document.getElementById('trash').innerHTML += /*html*/`
        <div class="imgBoxHelp">
              <img class="imgBox" src="${trashImage}" onclick="enlargeTrash('${i}'), show('darkBackground')">    
            <img src="./img/arrow-rotate-left-solid.png" class="recoverImg" onclick="recoverImage('${i}')">
            <img src="./img/trash-solid2.png" class="trashSymbolWhiteSmall" id="purgeImage" onclick="purgeImage('${i}')">
            </div>
        `
    }
}

function enlargeTrash(i) {
    let trashImage = trash[i];
    document.getElementById('imgBoxZoom').innerHTML = /*html*/`
    <img src="${trashImage}">
    <img class="trashSymbolWhite" id="purgeImage" onclick="purgeImage('${i}')" src="./img/trash-solid2.png">
    <img class="recoverImgBig" src="./img/arrow-rotate-left-solid.png" onclick="recoverImage('${i}')">
    
    <img onclick="backTrash('${i}')" src="./img/arrowleft.png" class="arrowleft">
    <img onclick="nextTrash('${i}')" src="./img/arrowright.png" class="arrowright">
        `
}

function purgeImage(position) {
    trash.splice(position, 1);
    position--;
    nextTrash(position);
    if (trash.length == 0) {
        hide('darkBackground');
    }
    if (trash > 1) {
        nextTrash(position);
    }
    document.getElementById('trash').innerHTML = '';
    save();
    trashRender();
}

function nextTrash(i) {
    i++;
    if (i >= trash.length) {
        i = 0;
    }
    enlargeTrash(i);
}

function backTrash(i) {
    i--;
    if (i < 0) {
        i = trash.length - 1;
    }
    enlargeTrash(i);
}

function recoverImage(position) {
    let recoverImage = trash.splice(position, 1);
    position--;
    nextTrash(position);
    if (trash.length == 0) {
        hide('darkBackground');
    }
    images.push(recoverImage);

    document.getElementById('trash').innerHTML = '';
    save();
    trashRender();
}

//
// hide/show
//
function hide(id) {
    document.getElementById(id).classList.remove('d-show');
}
function show(id) {
    document.getElementById(id).classList.add('d-show');
}

//
// Burger
//
function showMenu() {
    document.getElementById('burgerMenu').classList.add('show-overlay-menu');
}
function closeMenu() {
    document.getElementById('burgerMenu').classList.remove('show-overlay-menu');
}
function onMouseOver() {
    document.getElementById('burgerMenu').classList.add('show-overlay-menu');
}
function onMouseLeave() {
    document.getElementById('burgerMenu').classList.remove('show-overlay-menu');
}
