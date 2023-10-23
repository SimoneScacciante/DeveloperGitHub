let names = ['0 Simone', '1 Sara', '2 Gianni'];
let phoneNumbers = ['000' , '111', '222'];
render();

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
        
        <button onclick="deleteContact()">Löschen</button>  
        </div>
        `;
    }
}

function addContact() {
    let name = document.getElementById('nameID').value;
    let number = document.getElementById('numberID').value;

    names.push(name);              
    phoneNumbers.push(number);
    render();                       
    console.log('Läuft!');
}

function deleteContact(i) {
    names.splice(i, 1);             // i = "an stelle 0 wird gelöscht", 1 = ein Element wird gelöscht
    phoneNumbers.splice(i, 1);
    render();                       // wenn du Funktion "render()" nicht angibst dann löscht er nur aus 
                                    // Array den Wert aber nicht aus HTML Code, somit Funktion "render()"
                                    // ausführen lassen damit auch HTML Code ausgeführt wird in nächsten Schritt

                                    // Es spielt keine Rolle welchen "Löschen" Button du anklickst, 
                                    // daher das immer aufgrund von i++ und i = 0
                                    // immer ab Position 0 und next höhere Zahl gelöscht wird (somit von 0, 1, 2, 3 etc..)
                                }
