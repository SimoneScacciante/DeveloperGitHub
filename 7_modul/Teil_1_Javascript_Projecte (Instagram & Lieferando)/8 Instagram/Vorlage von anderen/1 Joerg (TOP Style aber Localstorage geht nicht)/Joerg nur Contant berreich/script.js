'use strict'

// ========= JSON =========== 
let posts = [
{
    'profilePicture': './img/story1.jpg"',
    'user': 'Vikki',
    'location': 'Flensburg',

    'image': './img/location1.jpg',

    "like": "bx-heart",
    'likes': 55,

    'discription': 'Schöner Abend in Flensburg! <3',


    'comments': [{
        'user': 'Julia',
        'comment': 'gute nacht süße ',
    },
    {
        'user': 'Cat',
        'comment': 'Oh, kenn ich..^^',
    }]
},


{
    'user': 'Eddy',
    'profilePicture': './img/story6.jpg"',
    'location': 'München',
    'image': './img/location2.jpg',
    "like": "bx-heart",
    'likes': 71,
    'discription': 'Fotografiert in München!',
    'comments': [{
        'user': 'Tom',
        'comment': 'Schönes Foto!'
    },
    {
        'user': 'Sarah',
        'comment': 'Wir schaffen es ;)'
    }]
},
{
    'user': 'Felix',
    'profilePicture': './img/follow5.jpg"',
    'location': 'Home',
    'image': './img/location3.jpg',
    "like": "bx-heart",
    'likes': 617,
    'discription': 'Folgt mir für mehr Katzenfotos',
    'comments': [{
        'user': 'Astrid',
        'comment': 'Gefolgt!'
    },
    {
        'user': 'Oma',
        'comment': 'Auch mit meinem zweiten Account ;)'
    },
    {
        'user': 'Cat',
        'comment': 'ich will mehr sehen'
    }
    ]
},
{
    'user': 'Coder',
    'profilePicture': './img/story8.jpg"',
    'location': 'Home',
    'image': './img/location4.jpg',
    "like": "bx-heart",
    'likes': 2,
    'discription': 'Warum kommentiert hier nie jemand?',
    'comments': [{
        'user': '',
        'comment': ''
    }
    ]
}
];


//============ RENDERN (content) ===========
let content = document.querySelector('.contentContainerSize');

function render() {
    content.innerHTML = '';
    for (let i = 0; i < posts.length; i++) {
        let newPosts = posts[i];
        content.innerHTML += /*html*/ `
        
        <div class="contentHeader">
            <div class="suggContainer">
                <div class="contentProfilePicture"><img src="${newPosts['profilePicture']}" alt=""></div>
                <div><p class="profileNameBold">${newPosts['user']}</p><p class="contentLocation">${newPosts['location']}</p></div>
                <div class="follow marginLeft"><span>Folgen</span></div>
                <div class="dots"><i class='bx bx-dots-horizontal-rounded'></i></div>
            </div>
        </div>

        <br>

        <div class="contentImage">
        <img src="${newPosts['image']}" alt="">
        </div>



        <div class="contentBtns">

            <div class="contentBtnsLeft">
                 <i class='bx ${newPosts['like']} btnSize likeHeart' onclick="addlike(${i})" id="heart${i}"></i>
                 <i class='bx bx-comment' ></i>
                 <i class='bx bx-paper-plane' ></i>
            </div>

            <div>
            <i class='bx bx-bookmark' ></i>
            </div>

        </div>

    
        <div class="comments fontSize14">
            <p class="likes bold">Gefällt ${newPosts['likes']} Mal</p>

            <div class="commentContainer${i}">
                <span class="bold">${newPosts['user']}</span>
                <span class="comment">${newPosts['discription']}</span><br>
            </div>
            

            <div class="inputContainer">
            
            <input type="text" placeholder="Kommentieren..." id="commentInput${i}">


            <div class="changeUser" onclick="addcomment(${i})">
                <span> Posten </span>
            </div>

            <i class='bx bx-smile smilie' ></i>
            
        </div>

        <br>
        <hr>
        <br>`;


        let commentsContainer = document.querySelector(`.commentContainer${i}`);

        for (let j = 0; j < newPosts['comments'].length; j++) {
            let commentsIndex = newPosts['comments'][j];
            
            commentsContainer.innerHTML += `<span class="bold">${commentsIndex['user']}</span>
                                            <span class="comment">${commentsIndex['comment']}</span><br>`;
        }

    }

    
}



//=================== Comments==============
function addcomment(index) {
    let commentValue = document.querySelector(`#commentInput${index}`);
    commentValue = commentValue.value
    let x = {
        "user": "joergii",
        "comment": commentValue
    }
    posts[index]['comments'].push(x);
    commentValue = '';
    render();
}



// ========== Like ========================
function addlike(index) {
    if (posts[index]['like'] === "bxs-heart likeRed") {
        posts[index]['likes'] -= 1;
        posts[index]['like'] = "bx-heart";
        render();
    } else {
        posts[index]['like'] = "bxs-heart likeRed";
        posts[index]['likes'] += 1;
        render();
    }
}