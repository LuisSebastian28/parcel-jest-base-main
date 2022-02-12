import sumar from "./sumador";
import multiplicar from "./multiplicador";


const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const third = document.querySelector("#tercer-numero");
const fourth = document.querySelector("#cuarto-numero");
const form = document.querySelector("#sumar-form");
const form2 = document.querySelector("#multilpicar-form");
const div = document.querySelector("#resultado-div");
const div2 = document.querySelector("#resultado-div2");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

form2.addEventListener("submit", (event) => {
  event.preventDefault();

  const thirdnumber = Number.parseInt(third.value);
  const fourthnumber = Number.parseInt(fourth.value);

  div2.innerHTML = "<p>" + multiplicar(thirdnumber, fourthnumber) + "</p>";
});