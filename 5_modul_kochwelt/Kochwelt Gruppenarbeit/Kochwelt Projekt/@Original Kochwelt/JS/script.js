
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
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) { elmnt.innerHTML = this.responseText; }
          if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
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
let mails = [];
let notes = [];
let titles = [];

function add() {
  let title = document.getElementById('title');
  let note = document.getElementById('note');
  let mail = document.getElementById('mail');


  if (title.value != '' && mail.vale != '' && note.value != '') {
    mails.push(mail.value);
    titles.push(title.value);
    notes.push(note.value);

    alert(' Danke für Ihre Nachricht!')

  } else {
    alert(' Füllen sie bitte alle Felder aus');
  }

  includeHTML()
}




function navbar() {
  let list = document.getElementById('menu').classList;
  list.add("show-menu")
  list.add("d-flex")
  list.remove("d-none")
}

function removemenu() {
  document.getElementById('menu').classList.remove("show-menu");
}










function amerikanischePancakes() {
  let VARinputfield = document.getElementById('inputfield').value;

  document.getElementById('num1').innerHTML = 250 * VARinputfield;
  document.getElementById('num2').innerHTML = 2 * VARinputfield;
  document.getElementById('num3').innerHTML = 2 * VARinputfield;
  document.getElementById('num4').innerHTML = 1 * VARinputfield;
  document.getElementById('num5').innerHTML = 2 * VARinputfield;
}

function caprese() {
  let VARinputfield = document.getElementById('inputfield').value;

  document.getElementById('num1').innerHTML = 150 * VARinputfield;
  document.getElementById('num2').innerHTML = 2 * VARinputfield;
  document.getElementById('num3').innerHTML = 1 * VARinputfield;
}

function gulasch() {
  let VARinputfield = document.getElementById('inputfield').value;

  document.getElementById('num1').innerHTML = 1 * VARinputfield;
  document.getElementById('num2').innerHTML = 500 * VARinputfield;
  document.getElementById('num3').innerHTML = 350 * VARinputfield;
  document.getElementById('num4').innerHTML = 1 * VARinputfield;
  document.getElementById('num5').innerHTML = 2 * VARinputfield;
  document.getElementById('num6').innerHTML = 1 * VARinputfield;
}

function schokofondue() {
  let VARinputfield = document.getElementById('inputfield').value;

  document.getElementById('num1').innerHTML = 3 * VARinputfield;
  document.getElementById('num2').innerHTML = 200 * VARinputfield;
  document.getElementById('num3').innerHTML = 1 * VARinputfield;
}

function tacos() {
  let VARinputfield = document.getElementById('inputfield').value;

  document.getElementById('num1').innerHTML = 200 * VARinputfield;
  document.getElementById('num2').innerHTML = 0.5 * VARinputfield;
  document.getElementById('num3').innerHTML = 0.25 * VARinputfield;
  document.getElementById('num4').innerHTML = 2 * VARinputfield;
  document.getElementById('num5').innerHTML = 4 * VARinputfield;
  document.getElementById('num6').innerHTML = 5 * VARinputfield;
  document.getElementById('num7').innerHTML = 4 * VARinputfield;
  document.getElementById('num8').innerHTML = 4 * VARinputfield;
  document.getElementById('num9').innerHTML = 1 * VARinputfield;
  document.getElementById('num10').innerHTML = 1 * VARinputfield;
  document.getElementById('num11').innerHTML = 1 * VARinputfield;
  document.getElementById('num12').innerHTML = 1 * VARinputfield;
}

function bruschetta() {
  let VARinputfield = document.getElementById('inputfield').value;

  document.getElementById('num1').innerHTML = 150 * VARinputfield;
  document.getElementById('num2').innerHTML = 2 * VARinputfield;
  document.getElementById('num3').innerHTML = 3 * VARinputfield;
  document.getElementById('num4').innerHTML = 4 * VARinputfield;
  document.getElementById('num5').innerHTML = 4 * VARinputfield;
}


function startDiashow() {
  setTimeout(() => {
    salz_1();

  }, 2000)
}


function salz_1() {
  document.getElementById('img_salz').src = '/images/salz1.jpg';
  setTimeout(salz_2, 3000)
}

function salz_2() {
  document.getElementById('img_salz').src = '/images/salz2.jpg';
  setTimeout(salz_3, 3000)
}

function salz_3() {
  document.getElementById('img_salz').src = '/images/salz3.jpg';
  setTimeout(salz_1, 3000)
}









