let posts = [{
        'profilepic': './img/profil1.jpg',
        'author': 'Benjamin',
        'image': './img/1.jpg',
        'description': 'Kunst und Kultur',
        'location': 'Griechenland',
        'likes': '234',
        'alreadyliked': false,
        'comments': ['Gefällt mir sehr, was ich da sehe.'],
        'newcomments': [],
        'liked': false,

    },

    {
        'profilepic': './img/profil2.jpg',
        'author': 'Franz',
        'image': './img/2.jpg',
        'description': 'Was eine schöne Location',
        'location': 'Kreta',
        'likes': '23',
        'alreadyliked': false,
        'comments': ['Mega cool'],
        'newcomments': [],
        'liked': false,
    },

    {
        'profilepic': './img/profil3.jpg',
        'author': 'Jad',
        'image': './img/3.jpg',
        'description': 'So schaut es hier aus.',
        'location': 'Malaga',
        'likes': '475',
        'comments': ['Das find ich megaaaaa'],
        'newcomments': [],
        'liked': false,
    },

    {
        'profilepic': './img/profil4.jpg',
        'author': 'Ila',
        'image': './img/4.jpg',
        'description': 'I Love It',
        'location': 'Urlaub',
        'likes': '967',
        'comments': ['Genieß deinen Urlaub'],
        'newcomments': [],
        'liked': false,
    },

    {
        'profilepic': './img/profil5.jpg',
        'author': 'Sina',
        'image': './img/5.jpg',
        'description': 'Holiday',
        'location': 'Bahamas',
        'likes': '89',
        'comments': ['Ich mach Urlaub auf Balkonien ^^'],
        'newcomments': [],
        'liked': false,
    },
    {
        'profilepic': './img/profil6.jpg',
        'author': 'TB0N3',
        'image': './img/6.jpg',
        'description': 'OffWhite',
        'location': 'Mykonos',
        'likes': '45',
        'comments': ['Greetings'],
        'newcomments': [],
        'liked': false,
    },
    {
        'profilepic': './img/DALL·E 2023-08-04 18.14.09 - profile picture.png',
        'author': 'TravelBlog',
        'image': './img/7.jpg',
        'description': 'Good Night',
        'location': 'HomeOffice',
        'likes': '23',
        'comments': ['Good night'],
        'newcomments': [],
        'liked': false,
    },
    {
        'profilepic': './img/DALL·E 2023-08-04 18.14.20 - profile picture.png',
        'author': 'CurleySun',
        'image': './img/8.jpg',
        'description': 'Love this Island',
        'location': 'Kreta',
        'likes': '22',
        'comments': ['Me too'],
        'newcomments': [],
        'liked': false,
    },
    {
        'profilepic': './img/DALL·E 2023-08-04 18.15.57 - profile picture instagram.png',
        'author': 'Hendrik',
        'image': './img/9.jpg',
        'description': 'Unser Hotel',
        'location': 'Weg vom Chef',
        'likes': '90',
        'comments': ['Wir sehen uns in zwei Wochen in meinem Büro'],
        'newcomments': [],
        'liked': false,
    },

];
load()

function show() {

    let content = document.getElementById('postcontainer');
    content.innerHTML = '';
    for (i = 0; i < posts.length; i++) {

        const post = posts[i]; // Damit sagt man, dass die Variable 'post' immer das Array posts und i also +1 ist.
        const likeImage = post.liked ? "./img/heartred.png" : "./img/herz.png"; // Bei true ist das erste bild und bei false das zweite bild angespeochen

        content.innerHTML += /*html*/ `
        <div class="postcontent">
         <div>
            <div class="profileinfo">
           
             <img onclick="demoAlert()" class="profilepic" src="${post['profilepic']}" alt="" >
             <span onclick="demoAlert()">${post['author']}</span>
           </div>
           <span> <img class="markerlocation" src="./img/marker.png" alt="">  ${post['location']} </span>
         </div>
         <div> <img class="postimg" src="${post['image']}" </div>
         <div class="reaction"> 
                <div class="underImgIcon">
                <img onclick="like(${i})" id="like${i}" class="marker" src="${likeImage}" alt="">  
                <img onclick="demoAlert()" class="marker" src="./img/papierflieger.png" alt="">
                <img onclick="demoAlert()" class="marker" src="./img/kommentar.png" alt=""> </div>
               <div onclick="demoAlert()"> <img class="marker" src="./img/lesezeichen.png" alt=""></div>
            </div>
          <div><b> Gefällt <span id="showLikes${i}"> ${post['likes']}</span></b></div>
          <div class="description"> ${post['description']}</div>
            <div id="comments"> <b> ${post['author']} : </b> ${post['comments']}</div>
            <div id="shownewcomment${i}">  </div>
        <div class="commentsection" ><textarea class="addnewcomment" name="" id="addnewcomment${i}" cols="50" rows="2" placeholder="Kommentieren..."></textarea>
    <button onclick="addComment(${i})" id="addComment">Posten</button></div>
        </div>
        `;

        let newcomment = document.getElementById(`shownewcomment${i}`);
        newcomment.innerHTML = '';
        for (let j = 0; j < post['newcomments'].length; j++) {
            const comment = post['newcomments'][j];
            newcomment.innerHTML += `<div> <b> Besucher: </b> ${comment}</div>`
        }
    }
    save()
}

function like(index) {

    let post = posts[index]
    let like = document.getElementById(`like${index}`);
    let likeCount = document.getElementById(`showLikes${index}`);

    if (!post.liked) {
        like.src = "./img/heartred.png";
        posts[index].liked = true
        post.likes = (parseInt(post.likes) + 1).toString();
    } else {
        like.src = "./img/herz.png";
        post.liked = false;
        post.likes = (parseInt(post.likes) - 1).toString();


    }


    likeCount.textContent = posts[index].likes;
    save()
}

function addComment(index) {
    let input = document.getElementById(`addnewcomment${index}`);
    if (input.value == '') {
        alert(' Bitte etwas eingeben!');
    } else {
        posts[index]['newcomments'].push(input.value);
        save();
        show();

    }
}

function save() {
    let saveData = JSON.stringify(posts);
    localStorage.setItem('savesData', saveData);
}

function load() {
    let savedData = localStorage.getItem('savesData');

    if (savedData) {
        posts = JSON.parse(savedData);
    }
}

function demoAlert() {
    alert(' Demoversion.   Aktuell steht diese Funktion noch nicht zur verfügung!')
}