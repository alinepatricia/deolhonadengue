const container = document.querySelector(".container");
const coffees = [
  { name: "Sobre", image: "./images/mosquito.png", lnk: "./pages/mosquito.html"},
  { name: "Prevenção", image: "./images/mosquito1.jpg", lnk: "./pages/comoprevenir.html"},
  { name: "Perguntas Frequentes", image: "./images/perguntas.png", lnk: "./pages//perguntasfrequentes.html"},
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image, lnk }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href=${lnk}>Confira</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}