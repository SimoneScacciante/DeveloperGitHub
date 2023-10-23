let names = ['0 Simone', '1 Sara', '2 Gianni'];
let phoneNumbers = ['000' , '111', '222'];
render();
save();  //wenn du diese Funktion entfernst, dann wird erst nach Button klick
// von "addContact()" aktiviert.

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
//Siehe im Browser unter "Application", Localstorage erscheint jetzt im Browser! "namesListe" ist hier
// dein Key, frei wählbarer name, Value ist dein Array bzw. dein jetzt umgewandelter Text
// füge "save()" Funktion jeder weiteren Funktion hinzu wo etwas mit deinem Array macht

function save() {
    let nameAsText = JSON.stringify(names);
    localStorage.setItem('namesListe', nameAsText);

    let numberAsText = JSON.stringify(phoneNumbers);
    localStorage.setItem('phoneNumbersListe', numberAsText);
}

function addContact() {
    let name = document.getElementById('nameID').value;
    let number = document.getElementById('numberID').value;

    names.push(name);
    phoneNumbers.push(number);
    render();
    save();         // einfügen, da in "addContact()" Werte dem Array zugefügt werden, musst Funktion "save()" einfügen
}

function deleteContact(i) {
    names.splice(i, 1);
    phoneNumbers.splice(i, 1);
    render();
    save();          // einfügen, da in "addContact()" Werte dem Array entfernt werden, musst Funktion "save()" einfügen
}



