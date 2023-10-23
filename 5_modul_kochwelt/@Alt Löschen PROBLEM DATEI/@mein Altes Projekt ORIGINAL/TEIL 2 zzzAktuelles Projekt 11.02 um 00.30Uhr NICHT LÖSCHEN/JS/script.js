
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
let mails  = [];
let notes  = [];
let titles = [];

function add() {
  let title = document.getElementById('title');
  let note = document.getElementById('note');
  let mail = document.getElementById ('mail');

  
  if (title.value != '' && mail.vale != '' && note.value != ''){
  mails.push(mail.value);
  titles.push(title.value);
  notes.push(note.value);
 
    alert(' Danke für Ihre Nachricht!')

  } else {
      alert(' Füllen sie bitte alle Felder aus');
  }
  
  includeHTML()
}




function navbar(){
  let list = document.getElementById('menu').classList;
  list.add("show-menu")
  list.add("d-flex")
  list.remove("d-none")
 }
 
 function removemenu(){
   document.getElementById('menu').classList.remove("show-menu");
 }
 


