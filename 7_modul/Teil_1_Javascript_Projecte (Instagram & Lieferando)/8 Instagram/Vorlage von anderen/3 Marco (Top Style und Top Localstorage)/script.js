const userName = "melendros_";
let posts = [{
  profilePicture: "./img/star-wars-6720072_1280.jpg",
  namePoster: "Boba Fett",
  likesAmount: 23,
  heartsource: "./img/heart-thin-icon.png",
  location: "Tatooine",
  media: "./img/star-wars-6720072_1280.jpg",
  postText: "got some fancy Armor",
  nameComment: ["Darth Vader", "Stormtrooper #66", "Boba Fett"],
  comments: ["You look thicc!!", "...that looks sick af", "thank you bros"],
},

{
  profilePicture: "./img/star-wars-2172947_640.jpg",
  namePoster: "Stormtrooper #66",
  likesAmount: 34,
  heartsource: "./img/heart-thin-icon.png",
  location: "Burlington, USA",
  media: "./img/legoland-3481632_1280.jpg",
  postText: "with ma boyyzzz on vacation on Earth. USA! USA! USA!",
  nameComment: ["Darth Vader", "Boba Fett"],
  comments: [
    "be sure to leave the planet until next Week *Deathstar incoming*",
    "hf with those Earthlings... I heard prices are insane",
  ],
},

{
  profilePicture: "./img/darth-vader-2724892_1280.jpg",
  namePoster: "Darth Vader",
  likesAmount: 56,
  heartsource: "./img/heart-thin-icon.png",
  location: "somewhere in Space",
  media: "./img/star-wars-7723785_1280.jpg",
  postText: "finished and ready to shoot. pew pew pew!!",
  nameComment: ["Boba Fett", "Stormtrooper #66"],
  comments: ["wtf... get a Snickers V", "Wow Boss, that's sick!"],
},

{
  profilePicture: "./img/star-wars-2172947_640.jpg",
  namePoster: "Stormtrooper #66",
  likesAmount: 616,
  heartsource: "./img/heart-thin-icon.png",
  location: "onboard of a Destroyer",
  media: "./img/stormtrooper-7476232_1280.jpg",
  postText: "feeling badass today",
  nameComment: ["Boba Fett"],
  comments: ["niceee"],
},

{
  profilePicture: "./img/darth-vader-2724892_1280.jpg",
  namePoster: "Darth Vader",
  likesAmount: 56,
  heartsource: "./img/heart-thin-icon.png",
  location: "somewhere in Space",
  media: "./img/dog-4135235_1280.jpg",
  postText: "awwww, look im getting some Pets :D",
  nameComment: ["Boba Fett"],
  comments: ["awwww...cute"],
},

{
  profilePicture: "./img/darth-vader-2724892_1280.jpg",
  namePoster: "Darth Vader",
  likesAmount: 5346,
  heartsource: "./img/heart-thin-icon.png",
  location: "somewhere in Space",
  media: "./img/star-wars-1204193_1280.jpg",
  postText: "getting ready for a reveal...stay tuned!!",
  nameComment: ["Stormtrooper #66"],
  comments: ["HYPETRAINNNN!!"],
},
];

load();

// Function to generate the comment HTML for the generatePostHTML function
function generateCommentsHTML(nameComment, comments) {
  let commentsHTML = "";
  for (let i = 0; i < nameComment.length; i++) {
    commentsHTML += `
      <div class="comment">
        <span class="fw-Bold">${nameComment[i]}:</span>
        <span>${comments[i]}</span>
      </div>
    `;
  }
  return commentsHTML;
}

//generate HTML of each Post
function generatePostHTML(i) {
  const commentsHTML = generateCommentsHTML(
    posts[i].nameComment,
    posts[i].comments
  );
  return /*html*/ `
    <article class="post" id="post${i}">
      <div class="postHeadline">
        <div class="uploader">
          <img class="avatar-uploader" src="${posts[i].profilePicture}" alt="#" />
          <div class="uploader-name">
            <span class="fw-Bold fs14">${posts[i].namePoster}</span>
            <span class="fs12 colorLG-Darker">${posts[i].location}</span>
          </div>
        </div>
        <a href="#">
          <img class="dot-icon" src="./img/ellipsis-h-icon.png" alt="menü" />
        </a>
      </div>
      <div class="postMedia">
        <img src="${posts[i].media}" alt="ein Bild/Video" />
      </div>
      <div class="postInteraction-Bar">
        <div class="postInteractionIcons-left">
          <img onclick="toggleLike(${i})" id="likeheart${i}" class="icon likeheart" src=${posts[i].heartsource} alt="heart-icon" />
          <img class="icon" src="./img/instagram-comment-icon.png" alt="commentBubble-icon" />
          <img class="icon" src="./img/instagram-share-icon.png" alt="share-icon" />
        </div>
        <div class="postInteractionIcons-right">
          <img class="icon" src="./img/saved-icon.png" alt="savePost-icon" />
        </div>
      </div>
      <span class="liked-Text fs14 fw-Bold" id="likes${i}">gefällt ${posts[i].likesAmount} Mal</span>
      <div class="postText fs14">
        <span><b>${posts[i].namePoster}:</b> ${posts[i].postText}</span>
      </div>
      <div id="commentsOfPost${i}" class="comments-Container fs14">
        ${commentsHTML} <!-- Comments get loaded in from the generateCommentsHTML function -->
        <div class="comment-here">
          <input class="comment-input" type="text" placeholder="Kommentieren..." id="comment-input${i}" />
          <button class="comment-btn lightblue fw-Bold fs14" onclick="addComment(${i})">posten</button>
        </div>
      </div>
    </article>
  `;
}

//render all posts
function renderPosts() {
  const postsSection = document.getElementById("posts-section");
  postsSection.innerHTML = "";
  for (let i = 0; i < posts.length; i++) {
    postsSection.innerHTML += generatePostHTML(i);
  }
}

function addComment(index) {
  const validation = document.getElementById(`comment-input${index}`).value;
  if (validation === "") {
    alert("Bitte einen Kommentar schreiben.");
  } else {
    let inputComment = document.getElementById(`comment-input${index}`);
    posts[index]["comments"].push(inputComment.value);
    posts[index]["nameComment"].push(userName);
    renderPostComments(index);
    save();
  }
}

// Load from localStorage
function load() {
  const savedPosts = localStorage.getItem("posts");
  if (savedPosts) {
    posts = JSON.parse(savedPosts);
    renderPosts();
  }
}

//save to localStorage
function save() {
  localStorage.setItem("posts", JSON.stringify(posts));
}

//Toggle the likes between Liked and not liked
function toggleLike(index) {
  if (posts[index].heartsource === "./img/heart-thin-icon.png") {
    //not liked
    posts[index].heartsource = "./img/red-heart-icon.png"; //switch heart icon
    posts[index].likesAmount++; //increase likes amount
  } else {
    posts[index].heartsource = "./img/heart-thin-icon.png"; //change to the "not liked" img
    posts[index].likesAmount--; //decrease like amount
  }
  save();
  updateLikes(index); //update just the html of the current post to prevent loading all posts everytime
}

function updateLikes(index) {
  const heart = document.getElementById(`likeheart${index}`);
  const likeCount = document.getElementById(`likes${index}`);
  
  heart.src = posts[index].heartsource; // Update the src attribute of the heart icon
  
  likeCount.innerHTML = `
    gefällt ${posts[index].likesAmount} Mal
    `;
}

function renderPostComments(index) {
  const commentsHTML = generateCommentsHTML(
    posts[index].nameComment,
    posts[index].comments
  );
  const commentsOfPost = document.getElementById(`commentsOfPost${index}`);
  commentsOfPost.innerHTML = /*html*/ `
  ${commentsHTML} <!-- Comments get loaded in from the generateCommentsHTML function -->
  <div class="comment-here">
    <input class="comment-input" type="text" placeholder="Kommentieren..." id="comment-input${index}" />
    <button class="comment-btn lightblue fw-Bold fs14" onclick="addComment(${index})">posten</button>
  </div>
  `;
}