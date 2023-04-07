
/***********calculator credite */
function calculeazaCredit() {
  var suma = document.getElementById("suma").value;
  var perioada = document.getElementById("perioada").value;

  if (suma < 0 || perioada < 0) {
    alert("Introduceți o valoare validă!");
  } else {
    var dobanda = 4.6;
    var rataLunara = (suma * (dobanda / 1200)) / (1 - Math.pow(1 + (dobanda / 1200), - perioada));
    var totalPlata = rataLunara * perioada;

    var afisare = "Valoarea creditului: " + suma + " lei<br>";
    afisare += "Dobânda: " + dobanda + "% pe an<br>";
    afisare += "Perioada de plată: " + perioada + " luni<br>";
    afisare += "Rata lunară: " + rataLunara.toFixed(2) + " lei<br>";
    afisare += "Total plata: " + totalPlata.toFixed(2) + " lei";

    const afisareEl = document.getElementById("afisare");
    afisareEl.innerHTML = afisare;
    afisareEl.style.display = "block";

  }
}

/************************calculator depozit********************************************* */

function calculeazaDepozit() {
  var suma = Number(document.getElementById("suma").value);
  var perioada = Number(document.getElementById("perioada").value);

  if (suma < 0 || perioada < 0) {
    alert("Introduceți o valoare validă!");
  } else {
    var dobanda = 1;
    var total = suma + (suma * dobanda / 100 * perioada / 12);
    var rataLunara = total / perioada;

    var afisare = "Suma depozitată: " + suma + " lei<br>";
    afisare += "Dobânda: " + dobanda + "% pe an<br>";
    afisare += "Perioada de depozitare: " + perioada + " luni<br>";
    afisare += "Rata lunară: " + rataLunara.toFixed(2) + " lei<br>";
    afisare += "Total întors: " + total.toFixed(2) + " lei";

    const afisareEl = document.getElementById("afisare");
    afisareEl.innerHTML = afisare;
    afisareEl.style.display = 'block'

  }

}
/******************************pagina despre noi********************************************* */


function modal() {
  // Get the contact modal element
  const modal = document.querySelector("#contact-modal");

  // Get the button that opens the modal
  const btn = document.querySelector("button");

  // Get the element that closes the modal
  const span = document.querySelector(".close");

  // Function to show the modal
  function showModal() {
    modal.style.display = "block";
  }

  // Function to hide the modal
  function hideModal() {
    modal.style.display = "none";
  }

  // When the user clicks the button, show the modal
  btn.onclick = showModal;

  // When the user clicks on the close span, hide the modal
  span.onclick = hideModal;

  // When the user clicks outside of the modal, hide it
  window.onclick = function (event) {
    if (event.target == modal) {
      hideModal();
    }
  };
}
// caseta de chat 

const chatboxButton = document.querySelector('.chatbox-button');
const chatbox = document.querySelector('.chatbox');
const closeButton = document.querySelector('.close-button');
const messageForm = document.querySelector('#message-form');
const messageInput = document.querySelector('#message-input');
const messages = document.querySelector('.messages');

// Open the chatbox when the chatbox button is clicked
chatboxButton.addEventListener('click', () => {
  chatbox.classList.toggle('open');
});

// Close the chatbox when the close button is clicked
closeButton.addEventListener('click', () => {
  chatbox.classList.remove('open');
});

// Handle form submission
messageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = messageInput.value;
  if (message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'sent');
    messageElement.innerHTML = `<p>${message}</p>`;
    messages.appendChild(messageElement);
    messageInput.value = '';
  }
});
