const BASE_URL = "https://api.frankfurter.app/latest";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  const URL = `${BASE_URL}?base=${fromCurr.value}`; // Add base currency to URL
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data.rates[toCurr.value]; // Access rate from "rates" object

  if (!rate) { // Handle potential missing rate
    console.error(`Error: Exchange rate not found for ${toCurr.value}`);
    msg.innerText = "Error: Exchange rate unavailable.";
    return;
  }

  let finalAmount = amtVal * rate;
  msg.innerText = `${amtVal} ${fromCurr.value}=${finalAmount.toFixed(2)} ${toCurr.value}`; // Format output with 2 decimals
};

// Function to update flag symbol (unchanged)
const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault(); // Prevent page reload on button click
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate(); // Update exchange rate on page load
});
