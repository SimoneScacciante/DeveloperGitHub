let names = ['0 Simone', '1 Sara', '2 Gianni'];
let phoneNumbers = ['000', '111', '222'];

function render() {
    let content = document.getElementById('TextHier1');

    content.innerHTML = '';
    content.innerHTML += `<h1>My Contacts</h1>`;

    for (let i = 0; i < names.length; i++) {
        const nameArray = names[i];
        const phoneNumberArray = phoneNumbers[i];

        content.innerHTML += `
    <div class="card"> 
    <b>Name:</b> ${nameArray} <br> 
    <b>Telefon:</b> ${phoneNumberArray} 
    </div> <br> <br> 
    `;
    }
}



