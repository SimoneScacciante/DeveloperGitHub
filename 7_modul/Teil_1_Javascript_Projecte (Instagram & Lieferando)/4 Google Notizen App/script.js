let headline = ['Obst'];
let notice = ['Apfel'];


function render() {

    let content1 = document.getElementById('TextHier1');
    content1.innerHTML = '';

    let content2 = document.getElementById('TextHier2');
    content2.innerHTML = '';


    content1.innerHTML += html`  <!-- Extension "inline HTML" = /*html*/ -->
    <input id="headlineID" type="text" placeholder="Titel eingeben...">
    <input id="noticeID" type="text" placeholder="Notiz eingeben...">
    <br>
    <button onclick="addNotice()">Einfügen</button>
    `;

    for (let i = 0; i < notice.length; i++) {
        const noticeArray = notice[i];
        const headlineArray = headline[i];

        content2.innerHTML += /*html*/`
        <div class="container-messagebox">
        <div class="notic-zeile">${headlineArray} <br></div>
        <div class="notic-zeile">${noticeArray}  </div>
        <div class="löschen-button"> <button onclick="deleteNotice()">Löschen</button> </div>
        </div>
        `;
    }
}

function addNotice() {
    let headlineText = document.getElementById('headlineID').value;
    let noticeText = document.getElementById('noticeID').value;

    document.getElementById('TextHier2').innerHTML = `<b>Deine Notiz:`;

    notice.push(noticeText)
    headline.push(headlineText)
    render();
    save();
}

function deleteNotice(i) {
    notice.splice(i, 1);
    headline.splice(i, 1);
    render();
}

function save() {
    let headlineAsText = JSON.stringify(headline);
    localStorage.setItem('headlineListe', headlineAsText)

    let noticeAsText = JSON.stringify(notice);
    localStorage.setItem('noticeListe', noticeAsText);
}
