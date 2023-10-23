

let postArray = [
    {
        'user': 'Scarlet_Witch_XX',
        'profilePicture': 'img/1contantUser.jpg',
        'location': 'Berlin',

        'image': 'img/1contant.jpg',

        'likes': 80385,

        'description': 'ich und Dr. Strange, Magischer Moment :D',

        'comments': [{
            'user': 'xKanyeEast90:',
            'commentUser': 'Ihr seht so toll aus!! ICH LIEBE EUCH!!!',
        }],


    },

    /* ---------------------------------- */

    {
        'user': 'Zelinaaaa_888',
        'profilePicture': 'img/2contantUser.jpg',
        'location': 'Zürich',

        'image': 'img/2contant.jpg',

        'likes': 79955,

        'description': 'kleine Wanderung mit pikachu haha',

        'comments': [{
            'user': 'fluffycookieXXS:',
            'commentUser': 'Ich hoffe dein pikachu hat gut gekämpft! :D',
        }],



    },

    /* ---------------------------------- */


    {
        'user': 'XXshadowbannedXX',
        'profilePicture': 'img/3contantUser.jpg',
        'location': 'Catania',

        'image': 'img/3contant.jpg',

        'likes': 95084,

        'description': 'sizilianische salsiccia, so lecker!!!',

        'comments': [{
            'user': 'dont_friendzone_me:',
            'commentUser': 'iiihhgit... Fleisch bläääh...',
        }],

    }
];
/* ---------------------------------- */




//============ RENDER (content) ===========


function render() {
    let content = document.getElementById('content');

    content.innerHTML = '';



    for (let i = 0; i < postArray.length; i++) {
        const postArrayIndex = postArray[i];

        content.innerHTML += /*html*/ `

        <div class="contentHeaderContainer">

            <div class="contentHeaderLeft"> 

                <div>
                    <img src="${postArrayIndex['profilePicture']}"  class="contentProfileImg">
                </div>

                <div class="contentUserLocation"> 
                    <div>
                        <p class="contentUserNickFont">${postArrayIndex['user']}</p> 
                    </div>

                    <div> 
                       <p class="contentUserLocationFont"> ${postArrayIndex['location']} </p>
                    </div>
                </div>
        
            </div>


            <div class="contentMenu">
                <img src="./icon/menuBtns.ico" class="contentIcon">
            </div>

        </div>
                
                  
        

                    
        <div class="contentImage"> 
                <img src="${postArrayIndex['image']}"  class="contentImg"> 
        </div>






        <div class="contentBtns">

            <div class="contentBtns1"> 

            
            <div class="contentBtnsLeft"> 
                <img src="./icon/heartBtns1.ico" id="heartID${i}"   class="contentIcon contentHeartIcon" onclick="addlike(${i})">

                <img src="./icon/commentsBtns.ico"  class="contentIcon">
                <img src="./icon/shareBtns.ico"  class="contentIcon">
            </div>

            <div class="contentBtnsRight">
                <img src="./icon/bookmarkBtns.ico"  class="contentIconBookmark">
            </div>


            </div>

        </div>







        <div class="contentCommentsContainer">

            <div> 
                <p class="likefont"> Gefällt <span id="likesID${i}"> ${postArrayIndex['likes']} </span> Mal </p>
            </div>


            <div class="contentDescriptionContainer">
                <div> 
                   <p class="fontBold"> ${postArrayIndex['user']} </p>
                </div>

                <div class="contentDescription"> 
                    ${postArrayIndex['description']} 
                </div>          
            </div>

            
            <div id="commentID${i}"> 
            </div>


            <div class="contentInputContainer"> 

                <input  id="commentInputID${i}" type="text" placeholder="Kommentieren">


                <div class="contantInputSmilieContainer"> 

                    <div onclick="addComment(${i})" class="contentInputAdd"> 
                        <span>  Posten </span>
                    </div>

                    <div >
                        <img src="./icon/smilie.ico" class="contentSmileyIcon">
                    </div>
                </div>


            </div>

        </div>

        <hr>
        

        <br><br><br><br>

        `;



        //=================== Comments Function loop (hier entsteht Kommentar) ==============


        let commentID = document.getElementById(`commentID${i}`);

        for (let j = 0; j < postArrayIndex['comments'].length; j++) {
            let commentArray = postArrayIndex['comments'][j];

            commentID.innerHTML += `
            <div class="contentCommentContainerStyle">
            <span class="fontBold"> ${commentArray['user']}</span>
            <span class="contentCommentStyle"> ${commentArray['commentUser']}</span><br>
            </div>
            `

        }
    }


}

//=================== Add Comments Function==============

function addComment(i) {
    let commentInput = document.getElementById(`commentInputID${i}`);

    postArray[i]['comments'].push({ 'user': 'SimonSkyWalker:', 'commentUser': commentInput.value });

    render();
}


function addlike(i) {


    if (document.getElementById(`heartID${i}`).getAttribute('src') === './icon/heartBtns1.ico') {

        document.getElementById(`heartID${i}`).setAttribute('src', './icon/heartBtns2.ico');



        document.getElementById(`likesID${i}`).innerHTML = postArray[i]['likes'] += 1;



    } else {

        document.getElementById(`heartID${i}`).setAttribute('src', './icon/heartBtns1.ico');


        document.getElementById(`likesID${i}`).innerHTML = postArray[i]['likes'] -= 1;

    }

}




