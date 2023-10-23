

let postArray = [
    {
        'user': 'Tagesschau_1',
        'profilePicture': 'img/1contantUser.jpg',
        'location': 'Berlin',

        'image': 'img/1contant.jpg',

        'likes': 305,

        'description': 'Das ist die Nummer 1, schöne Zahl!',

        'comments': [{
                    'user': 'Rocco:',
                    'commentUser': 'Kommentar Nummer 1',
                    }], 


    },

        /* ---------------------------------- */

    {
        'user': 'Hart aber Fair_1',
        'profilePicture': 'img/2contantUser.jpg',
        'location': 'Berlin',

        'image': 'img/2contant.jpg',
    
        'likes': 155,

        'description': 'Das ist Nummer 2, Unglaublich oder?',
        
        'comments': [{
                    'user': 'Gianni:',
                    'commentUser': 'Kommentar Nummer 2',
                    }], 



    },

        /* ---------------------------------- */


    {
        'user': 'Anne Will_3',
        'profilePicture': 'img/3contantUser.jpg',
        'location': 'Berlin',

        'image': 'img/3contant.jpg',

        'likes': 189,

        'description': 'Das ist die Nummer 3, jetzt habe ich Hunger!',
        
        'comments': [{
                    'user': 'Sara:',
                    'commentUser': 'Kommentar Nummer 3',
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
                        <p>${postArrayIndex['user']}</p> 
                    </div>

                    <div> 
                        ${postArrayIndex['location']} 
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

            <div class="contentLike"> 
                Gefällt  ${postArrayIndex['likes']} Mal
            </div>


            <div class="contentDescriptionContainer">
                <div> 
                    ${postArrayIndex['user']} 
                </div>

                <div class="contentDescription"> 
                    ${postArrayIndex['description']} 
                </div>          
            </div>

            
            <div id="commentID${i}"> 
            </div>


            <div class="contentInputContainer"> 

                <input id="commentInputID${i}" type="text" placeholder="Kommentieren">


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
            <span> ${commentArray['user']}</span>
            <span class="contentCommentStyle"> ${commentArray['commentUser']}</span><br>
            </div>
            `
            
        }
    }
}

//=================== Add Comments Function==============

function addComment(i) {
    let commentInput = document.getElementById(`commentInputID${i}`);

    postArray[i]['comments'].push({ 'user': 'Simone:', 'commentUser': commentInput.value });

    render();
}


function addlike(i) {


if (document.getElementById(`heartID${i}`).getAttribute('src') === './icon/heartBtns1.ico') {

    document.getElementById(`heartID${i}`).setAttribute('src','./icon/heartBtns2.ico');



} else {

    document.getElementById(`heartID${i}`).setAttribute('src', './icon/heartBtns1.ico');

}



}


