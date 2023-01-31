import "./styles.css";

const app = document.querySelector("#app");

const parent = document.createElement("div");
parent.classList.add("container");
app.insertAdjacentElement("afterbegin", parent);
let markup = "";
for (let i = 1; i <= 9; i++) {
  markup += `
    <div id='${i}' class='child${i} colorGrid'></div>
  `;
}
parent.innerHTML = markup;
