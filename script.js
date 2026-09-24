let formRef;
// Vi börjare med skapa varibel för formuläret

const rättNamn = "Kalle";
const rättLösenord = "qwe123";

function init() {
  // Letar efter vår form i HTML och lägger den i varibeln
  formRef = document.querySelector("form");

  // Lägger listner för att se formuläret skickas
  formRef.addEventListener("submit", (event) => {
    // Stoppar sidan från att laddas om
    event.preventDefault();

    console.log("Knappen klickades");

    // Anropar functionen som ska hantera inmatningen
    formDate();
  });
}

// Vi skapar en funktion för att hantera inmatningen
function formDate() {
  // Vi hämtar värdet från fältet med id=användarenman
  let inmatatNamn = document.getElementById("användarenamn").value;
  let inmatatLösenord = document.getElementById("lösenord").value;

  if (inmatatNamn === rättNamn && inmatatLösenord === rättLösenord) {
    console.log("Välkommen " + inmatatNamn + " du är nu inloggad ");
  } else {
    console.log("Felaktiga inloggningsuppgifter");
  }

  console.log("Inskrivit namn " + inmatatNamn);
  console.log("Inskrivit lösenord " + inmatatLösenord);
}
window.onload = init;
