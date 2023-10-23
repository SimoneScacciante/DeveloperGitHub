let posts = [
    {
        'logo': './img/1profil.jpg',
        'author': 'Christian De Stradis',
        'image': './img/1location.jpg',
        'description': 'Text 1 2 3 4',
        'location': 'Madeira, Portugal',
        'likeButton': './img/icons8-love-48.png',
        'likeButtonLiked': './img/heart.png',
        'likes': 534,
        'commentDescription': 'Madeiras wunderschöne Wälder.',
        'commentAuthor': 'Max Mustermann',
        'comment': 'Wow, sieht echt schön aus *_*'
    },
    {
        'logo': '.img/2profil.jpg',
        'author': 'Tagesschau',
        'image': '.img/2location.jpg',
        'description': 'Text 1 2 3 4',
        'location': 'Weltweit',
        'likeButton': './img/icons8-love-48.png',
        'likeButtonLiked': './img/heart.png',
        'likes': 224,
        'commentDescription': 'Durch die Klimaerwärmung wird es im Mittel wärmer, aber noch stärker verändern sich Extreme.',
        'commentAuthor': 'Christian De Stradis',
        'comment': "Ob wir unseren Planeten noch retten können?!"
    }
];

getArray();

function show() {
    document.getElementById('postcontainer').innerHTML += "";

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        document.getElementById('postcontainer').innerHTML += `
            <div class="instapost">
                <div>
                    <div class="post-header">
                        <img class="post-logo" src="${post['logo']}">
                        <div class="name-location">
                            <div class="post-author">${post['author']}</div>
                            <div class="post-location">${post['location']}</div>
                        </div>
                    </div>
                <div class="responsive-header">
                <img class="post-image" src="${post['image']}">
                <div class="button-section">
                <div class="3buttons">
                    <img onclick="addLike(${i})" id="heartID${i}" class="post-like" src="${post['likeButton']}">
                    <img class="post-comment" src="./icon/commentsBtns.ico">
                    <img class="post-message" src="./img/icons8-sent-50.png">
                </div>
                <div class="bookmark">
                    <img class="post-bookmark" src="./img/icons8-lesezeichen-24.png">
                </div>
            </div>
            <div class="like-section">
            <p>Gefällt <b id="likePlus${i}">${post['likes']}</b><b> Personen</b> </p> 
            </div>
            <div class="description">
            <b class="description-author">${post['author']}</b><p class="description-text">${post['commentDescription']}</p>
            </div>
            <div class="description2">
                <div class="comment-author"> <b class="description-author">${post['commentAuthor']}</b>
                </div>
                <div class="comment-text"> <p class="description-text">${post['comment']}</p>
                </div>
            </div>
            <div class="description2">
                <div class="comment-author"> <b class="description-author">Christian De Stradis</b>
                </div>
                <div class="comment-text"> <p class="description-text">Ja, es war wirklich wundervoll!</p>
                </div>
            </div>
            <div class="description3" id="generatedComment${i}">
            </div>

            <div class="comment-comment">
                <input class="comment-input" id="textcomment${i}" placeholder="Kommentieren ...">
                <button class="post-button" onclick="addComment(${i})">Posten</button>
            </div>
        `;
    }
    setArray();
    getArray();

}

function addLike(i) {
    let img = document.getElementById(`heartID${i}`)
    let heart = './img/icons8-love-48.png'
    let redHeart = './img/heart.png'

    if (img.getAttribute('src') === heart) {
        img.setAttribute('src', redHeart);

        document.getElementById(`likePlus${i}`).innerHTML = posts[i]['likes'] + 1;

    } else {
        img.setAttribute('src', heart);
        document.getElementById(`likePlus${i}`).innerHTML = posts[i]['likes'];
    }
}

function addComment(i) {
    let commi = document.getElementById(`textcomment${i}`).value;

    if (commi == "") {
        alert('Bitte Text eingeben!')
    } else {
        document.getElementById(`generatedComment${i}`).innerHTML += `
        <div class="comment-flex">
            <div class="comment-author"> <b class="description-author">Christian De Stradis</b>
            </div>
            <div class="comment-text"> <p class="description-text">${commi}</p>
            </div>
        </div>`;
    }

    document.getElementById(`textcomment${i}`).value = "";
}


function setArray() {
    let saveArray = JSON.stringify(posts)
    localStorage.setItem('posts', saveArray);
}

function getArray() {
    let saveArray = localStorage.getItem('posts');

    if (saveArray) {
        posts = JSON.parse(saveArray);
    }
}
