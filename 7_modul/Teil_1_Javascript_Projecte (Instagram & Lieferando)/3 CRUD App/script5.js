let names = ['0 Simone', '1 Sara', '2 Gianni'];
let phoneNumbers = ['000' , '111', '222'];
render();
save();  
load();

function render() {
    let content = document.getElementById('TextHier1');
    content.innerHTML = '';

    content.innerHTML += `
    <h1>My Contacts</h1>
    
    <input type="text" id="nameID" placeholder="Name eingeben..."> <br>
    <input type="number" id="numberID" placeholder="Nummer eingeben..."> <br>
    
    <button onclick="addContact()">Hinzufügen</button>  
    <button onclick="deleteContact()">Löschen</button>                   
    `;
    
    for (let i = 0; i < names.length; i++) {
        const nameArray = names[i];
        const phoneNumberArray = phoneNumbers[i];

        content.innerHTML += `                  
        <div class="card">
        <p>Name: ${nameArray}</p>
        <p>Nummer: ${phoneNumberArray}</p>         
        </div>
        `;
    }
}

function save() {
    let nameAsText = JSON.stringify(names);
    localStorage.setItem('namesListe', nameAsText);

    let phonenumberAsText = JSON.stringify(phoneNumbers);
    localStorage.setItem('phoneNumbersListe', phonenumberAsText);
}



function load() {  // abfrage mit "getItem" herausnehmen ((???verstehe ich nicht???))
    let nameAsText = localstorage.getItem('namesListe')  
    let phonenumberAsText = localstorage.getItem('phoneNumbersListe')

    names = JSON.parse(namesAsText);
    phoneNumbers = JSON.parse(phonenumbersAsText);
}



function addContact() {
    let name = document.getElementById('nameID').value;
    let number = document.getElementById('numberID').value;

    names.push(name);
    phoneNumbers.push(number);
    render();
    save();         
}

function deleteContact(i) {
    names.splice(i, 1);
    phoneNumbers.splice(i, 1);
    render();
    save();          
}

