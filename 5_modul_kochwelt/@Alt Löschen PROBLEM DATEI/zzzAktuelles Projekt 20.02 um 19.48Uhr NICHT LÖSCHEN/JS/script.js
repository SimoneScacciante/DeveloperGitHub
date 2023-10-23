
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
  let list = document.getElementById('nav-bar').classList;
  list.add("showmenu")
 }
 
 function removemenu(){
   document.getElementById('nav-bar').classList.remove("showmenu");
 }
 


 function asiatischeNudel() {
  let inputfield = document.getElementById('inputfield').value;

    document.getElementById('num1').innerHTML  = 250*inputfield;
    document.getElementById('num2').innerHTML  = 0.5*inputfield;
    document.getElementById('num3').innerHTML  = 1*inputfield;
    document.getElementById('num4').innerHTML  = 0.5*inputfield;
    document.getElementById('num5').innerHTML  = 1*inputfield;
    document.getElementById('num6').innerHTML  = 50*inputfield;
    document.getElementById('num7').innerHTML  = 60*inputfield;
    document.getElementById('num8').innerHTML  = 1*inputfield;
    document.getElementById('num9').innerHTML  = 1*inputfield;

  }   
function amerikanischePancakes() {
  let inputfield = document.getElementById('inputfield').value;

    document.getElementById('num1').innerHTML  = 250*inputfield;
    document.getElementById('num2').innerHTML  = 2*inputfield;
    document.getElementById('num3').innerHTML  = 3*inputfield;
    document.getElementById('num4').innerHTML  = 1*inputfield;
    document.getElementById('num5').innerHTML  = 2*inputfield;
}

function bauersalat() {
  let inputfield = document.getElementById('inputfield').value;

    document.getElementById('num1').innerHTML  =1*inputfield;
    document.getElementById('num2').innerHTML  =2*inputfield;
    document.getElementById('num3').innerHTML  =500*inputfield;
    document.getElementById('num4').innerHTML  =2*inputfield;
    document.getElementById('num5').innerHTML  =1*inputfield;
    document.getElementById('num6').innerHTML  =200*inputfield;
    document.getElementById('num7').innerHTML  =1*inputfield;
    document.getElementById('num8').innerHTML  =1*inputfield;
    document.getElementById('num9').innerHTML  =125*inputfield;
    document.getElementById('num10').innerHTML =1*inputfield;
    document.getElementById('num11').innerHTML =1*inputfield;
}

function gruenkohl() {
  let inputfield = document.getElementById('inputfield').value;

    document.getElementById('num1').innerHTML  =1*inputfield;
    document.getElementById('num2').innerHTML  =20*inputfield;
    document.getElementById('num3').innerHTML  =1*inputfield;
    document.getElementById('num4').innerHTML  =100*inputfield;
    document.getElementById('num5').innerHTML  =1*inputfield;
    document.getElementById('num6').innerHTML  =1*inputfield;
    document.getElementById('num7').innerHTML  =300*inputfield;
    document.getElementById('num8').innerHTML  =4*inputfield;
    document.getElementById('num9').innerHTML  =20*inputfield;
    document.getElementById('num10').innerHTML =400*inputfield;
    document.getElementById('num11').innerHTML =1*inputfield;
}

function gulasch() {
  let inputfield = document.getElementById('inputfield').value;

    document.getElementById('num1').innerHTML =1*inputfield;
    document.getElementById('num2').innerHTML =500*inputfield;
    document.getElementById('num3').innerHTML =350*inputfield;
    document.getElementById('num4').innerHTML =1*inputfield;
    document.getElementById('num5').innerHTML =2*inputfield;
    document.getElementById('num6').innerHTML =1*inputfield;
}

function nutella() {
  let inputfield = document.getElementById('inputfield').value;

    document.getElementById('num1').innerHTML =300*inputfield;
    document.getElementById('num2').innerHTML =8*inputfield;
    document.getElementById('num3').innerHTML =200*inputfield;
    document.getElementById('num4').innerHTML =100*inputfield;
    document.getElementById('num5').innerHTML =1*inputfield;
    document.getElementById('num6').innerHTML =1*inputfield;
    document.getElementById('num7').innerHTML =1*inputfield;
}


