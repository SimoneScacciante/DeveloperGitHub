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
    `;

 // Button mit "addContact()" funktioniert!


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

function addContact() {
    let name = document.getElementById('nameID').value;
    let number = document.getElementById('numberID').value;

    names.push(name);               // nun erscheint deine "Eingabe" zusätzlich zu den bereits hinterlegten Werten im Array
    phoneNumbers.push(number);
    render();                       //nun muss "render()" Funktion wieder durchgeführt werden damit in der "for Schleife"
                                    // das was du in Array "names.push(name)" eingefügt hast auch erscheint in Textfeld
    console.log('Läuft!');
}



