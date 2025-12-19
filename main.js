const cookieClosed = document.querySelector("#cookie-closed");
const cookieOpened = document.querySelector("#cookie-opened");
const fortuneText = document.querySelector("#fortune-text");
const luckyNumbersText = document.querySelector("#lucky-numbers");
const resetButton = document.querySelector("#reset-btn");

const titleInitial = document.querySelector("#title-initial");
const subtitle = document.querySelector(".subtitle");
const cookieArea = document.querySelector("#cookie-area");

let fortunes = [];
let backgrounds = { pc: [], celular: [] };

/* =====================
   CARGAR FRASES DEL JSON
   ===================== */
fetch("./quotes.json")
  .then(res => res.json())
  .then(data => {
    fortunes = data;
  })
  .catch(err => console.error("Error cargando frases:", err));

/* =====================
   CARGAR BACKGROUNDS
   ===================== */
fetch("./assets/backgrounds.json")
  .then(res => res.json())
  .then(data => {
    backgrounds = data;
    setRandomBackground();
  })
  .catch(err => console.error("Error cargando backgrounds:", err));

/* =====================
   DETECTAR DISPOSITIVO Y ELEGIR FONDO
   ===================== */
function setRandomBackground() {
  const isMobile = window.innerWidth <= 768; // Ajustable según lo que consideres celular
  const folder = isMobile ? "celular" : "pc";

  const imgs = backgrounds[folder];
  if (!imgs || imgs.length === 0) return;

  const randomIndex = Math.floor(Math.random() * imgs.length);
  const selectedImg = imgs[randomIndex];

  document.body.style.backgroundImage = `url("./assets/${folder}/${selectedImg}")`;
}

/* =====================
   NÚMEROS DE LA SUERTE
   ===================== */
function generateLuckyNumbers() {
  let nums = [];
  while (nums.length < 5) {
    const n = Math.floor(Math.random() * 99) + 1;
    if (!nums.includes(n)) nums.push(n);
  }
  return nums.join("    ");
}

/* =====================
   AJUSTAR TAMAÑO DE TEXTO
   ===================== */
function adjustFortuneFont(text) {
  const length = text.length;

  if (length < 80) {
    fortuneText.style.fontSize = "1.8rem";
    fortuneText.style.lineHeight = "1.4";
  } else if (length < 150) {
    fortuneText.style.fontSize = "1.6rem";
    fortuneText.style.lineHeight = "1.45";
  } else if (length < 220) {
    fortuneText.style.fontSize = "1.45rem";
    fortuneText.style.lineHeight = "1.5";
  } else {
    fortuneText.style.fontSize = "1.3rem";
    fortuneText.style.lineHeight = "1.55";
  }
}

/* =====================
   ABRIR COOKIE
   ===================== */
function openCookie() {
  if (fortunes.length === 0) return;

  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const phrase = fortunes[randomIndex].quoteText;

  fortuneText.innerText = phrase;
  luckyNumbersText.innerText = generateLuckyNumbers();

  adjustFortuneFont(phrase);

  cookieClosed.classList.add("cookie-opening");

  setTimeout(() => {
    cookieArea.classList.add("open");

    titleInitial.classList.add("hide");
    subtitle.classList.add("hide");

    cookieClosed.classList.add("hide");
    cookieClosed.classList.remove("cookie-opening");

    cookieOpened.classList.remove("hide");
    cookieOpened.classList.add("cookie-reveal");

    resetButton.classList.remove("hide");
  }, 800);
}

/* =====================
   RESET
   ===================== */
function resetCookie() {
  cookieArea.classList.remove("open");

  cookieOpened.classList.add("hide");
  cookieOpened.classList.remove("cookie-reveal");

  titleInitial.classList.remove("hide");
  subtitle.classList.remove("hide");

  cookieClosed.classList.remove("hide");
  resetButton.classList.add("hide");

  // Cambiar fondo de nuevo al azar al resetear
  setRandomBackground();
}

/* =====================
   EVENTOS
   ===================== */
cookieClosed.addEventListener("click", openCookie);
resetButton.addEventListener("click", resetCookie);

// Opcional: cambiar fondo si se redimensiona la ventana
window.addEventListener("resize", setRandomBackground);
