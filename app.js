const apiKey = "14186799b8b28d63dff883df"; // <-- Replace with your ExchangeRate-API key

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");


for (let select of dropdowns) {
  for (let currCode in countryList) {
    let option = document.createElement("option");
    option.value = currCode;
    option.innerText = currCode;

    if (select.name === "from" && currCode === "USD") option.selected = true;
    if (select.name === "to" && currCode === "INR") option.selected = true;

    select.appendChild(option);
  }

  select.addEventListener("change", (e) => {
    updateFlag(e.target);
  });
}


function updateFlag(selectElement) {
  let currCode = selectElement.value;
  let img = selectElement.parentElement.querySelector("img");
  img.src = `https://flagsapi.com/${countryList[currCode]}/flat/64.png`;
}


async function updateExchangeRate() {
  let amountInput = document.querySelector(".amount input");
  let amount = amountInput.value || 1;


  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurr.value}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

   
    const rate = data.conversion_rates[toCurr.value];
    const converted = (amount * rate).toFixed(2);

    msg.innerText = `${amount} ${fromCurr.value} = ${converted} ${toCurr.value}`;
  } catch (err) {
    msg.innerText = "Error fetching exchange rate!";
  }
}


btn.addEventListener("click", updateExchangeRate);

window.addEventListener("load", updateExchangeRate);
