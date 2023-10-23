let headline = ['Obst'];
let notice = ['Apfel'];

function render() {
    let content1 = document.getElementById('TextHier1');
    content1.innerHTML = '';

    let content2 = document.getElementById('TextHier2');
    content2.innerHTML = '';


    content1.innerHTML = /*html*/`
    <input placeholder="Titel eingeben..." id="headlineID">
    <input placeholder="Notiz eingeben..." id="noticeID">
    <button onclick="addNotice()">Einfügen</button>
    <button onclick="delete1()">Löschen</button>
    `;

    for (let i = 0; i < headline.length; i++) {
        const headlineArray = headline[i];
        const noticeArray = notice[i];


        content2.innerHTML += `
        ${headlineArray} ${noticeArray} <br>
        `
    }
}

function addNotice() {
    let headlineSave = document.getElementById('headlineID').value;
    let noticeSave = document.getElementById('noticeID').value;

    headline.push(headlineSave);
    notice.push(noticeSave);
    render();
    save();
}

function delete1(i) {
    headline.splice(i, 1)
    notice.splice(i, 1)
    render();
}

function save() {
    let headlineAsText = JSON.stringify(headline);
    localStorage.setItem('headlineListe', headlineAsText);

    let noticeAsText = JSON.stringify(notice);
    localStorage.setItem('noticeListe', noticeAsText);

}