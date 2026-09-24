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

  //   Vi skapar knappen som ska logga ut oss när man trycker på logga ut
  let loggaUtKnapp = document.getElementById("loggaUtKnapp");

  //   1. Visar formuläret igen
  loggaUtKnapp.addEventListener("click", () => {
    document.querySelector("form").style.display = "block";
    // 2 vi döljer logga ut  knappen
    document.getElementById("loggaUtKnapp").style.display = "none";

    // 3. vi tömer Välkomstmeddelandet
    document.getElementById("utskrift").innerText = "";

    // Tömmmer inmatningsfälten så att de är tom för nästa inloggning
    document.getElementById("användarenamn").value = "";
    document.getElementById("lösenord").value = "";

    // Rensar minne när man blir helt utloggad
    localStorage.removeItem("sparadAnvändare");
  });
}

// Vi skapar en funktion för att hantera inmatningen
function formDate() {
  // Vi hämtar värdet från fältet med id=användarenman
  let inmatatNamn = document.getElementById("användarenamn").value;
  let inmatatLösenord = document.getElementById("lösenord").value;

  if (inmatatNamn === rättNamn && inmatatLösenord === rättLösenord) {
    document.getElementById("utskrift").innerText =
      "Väkommen " + inmatatNamn + " du är nu inloggad";

    document.querySelector("form").style.display = "none";

    // Knappen ska visas efter man lyckads logga in
    document.getElementById("loggaUtKnapp").style.display = "block";

    // Lockstorge är som anteckningsblock inuti webbläsae
    // vi sparar användaren i webbläsaren när den lyckads logga in
    localStorage.setItem("sparadAnvändare", inmatatNamn);
    // itemset metoden. Tar emot två värden. nyckel och själva vädet som är Kalle
  } else {
    document.getElementById("utskrift").innerText =
      "Felaktiga inloggningsuppgifter";
  }

  console.log("Inskrivit namn " + inmatatNamn);
  console.log("Inskrivit lösenord " + inmatatLösenord);
}
window.onload = init;
