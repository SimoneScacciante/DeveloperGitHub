function hideImg1 () {
    document.getElementById('image-2').classList.remove('d-none1');
    document.getElementById('image-3').classList.remove('d-none1');
}

function hideImg2 () {
    document.getElementById('image-2').classList.add('d-none1');    
    document.getElementById('image-1').classList.remove('d-none1');
}

function hideImg3 () {
    document.getElementById('image-3').classList.add('d-none1');
    document.getElementById('image-2').classList.remove('d-none1');
}