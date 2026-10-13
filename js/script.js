// MILESTONE 1: la logica, prima in console
// MILESTONE 2: form in pagina e risultato stampato in pagina
// MILESTONE 3: stile (css/style.css)

const PRICE_PER_KM = 0.21;

// elementi del DOM
const ticketForm = document.getElementById('ticket-form');
const nameInput = document.getElementById('passenger-name');
const kmInput = document.getElementById('km');
const ageInput = document.getElementById('age');
const ticketSection = document.getElementById('ticket');

// calcola il prezzo: riceve km ed età, restituisce un numero
function calculatePrice(km, age) {
  let price = km * PRICE_PER_KM;

  if (age < 18) {
    price = price * 0.8; // -20%
  } else if (age >= 65) {
    price = price * 0.6; // -40%
  }

  return price;
}

// dice quale offerta si applica
function getOffer(age) {
  if (age < 18) {
    return 'Sconto minorenni 20%';
  } else if (age >= 65) {
    return 'Sconto over 65 40%';
  }
  return 'Biglietto standard';
}

ticketForm.addEventListener('submit', function (event) {
  // il submit ricaricherebbe la pagina: lo blocco
  event.preventDefault();

  // i valori degli input sono SEMPRE stringhe: li converto in numeri
  const passengerName = nameInput.value.trim();
  const km = parseInt(kmInput.value);
  const age = parseInt(ageInput.value);

  const price = calculatePrice(km, age);
  console.log(km, age, price.toFixed(2));

  // output in pagina, prezzo con massimo due decimali
  document.getElementById('out-name').innerText = passengerName;
  document.getElementById('out-km').innerText = km;
  document.getElementById('out-offer').innerText = getOffer(age);
  document.getElementById('out-price').innerText = `€ ${price.toFixed(2)}`;
  ticketSection.classList.remove('hidden');
});

// verifica del docente: 100 km, 10 anni => 16.80 ; 100 km, 70 anni => 12.60
console.log(calculatePrice(100, 10).toFixed(2));
console.log(calculatePrice(100, 70).toFixed(2));
