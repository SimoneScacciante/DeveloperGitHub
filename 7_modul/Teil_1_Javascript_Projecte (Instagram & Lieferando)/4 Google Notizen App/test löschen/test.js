let headline = ['test1'];
let notice = ['test2'];


function render() {

    let content1 = document.getElementById('TextHier1');
    content1.innerHTML = '';

    let content2 = document.getElementById('TextHier2');
    content2.innerHTML = '';



    content1.innerHTML += /*html*/ `
    <input placeholder="Titel eingeben..." id="headlineID">
    <input placeholder="Notiz eingeben..." id="noticeID"> <br>
    <button onclick="addNotice()">Einfügen</button>
    `

    for (let i = 0; i < headline.length; i++) {
        const noticeArray = notice[i];
        const headlineArray = headline[i];

        content2.innerHTML += /*html*/ `
        ${headlineArray}
        ${noticeArray}
        `
    }
}

function addNotice() {
let headlinetext = document.getElementById('headlineID').value;
let noticetext = document.getElementById('noticeID').value;

headline.push(headlinetext);
notice.push(noticetext);
render()
}
