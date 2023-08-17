const text = document.querySelector(".text-name");
const cardName = document.querySelector(".name-form");
const textNum = document.querySelector(".text-num");
const cardNum = document.querySelector(".cardNum");
const textMonth = document.querySelector(".Month");
const cardMonth = document.querySelector(".MM");
const textYear = document.querySelector(".Year");
const cardYear = document.querySelector(".YY");
const textCvc = document.querySelector(".CVC");
const cardCvc = document.querySelector(".card-cvc");
const cardPage = document.querySelector(".card-info");

const submit = document.querySelector(".submit");

//Error selectors
const errName = document.querySelector(".error");
const errNum = document.querySelector(".error-num");
const errMMYY = document.querySelector(".error-mm-yy");
const errCvc = document.querySelector(".error-CVC");

// Success page display
const success = document.querySelector(".success-page");

// Dismiss page
const Dismiss = document.querySelector(".confirm");

//to show input on card
cardName.oninput = () => {
  text.innerHTML = cardName.value;
};

cardNum.oninput = () => {
  textNum.innerHTML = cardNum.value;
};

cardMonth.oninput = () => {
  textMonth.innerHTML = cardMonth.value;
};

cardYear.oninput = () => {
  textYear.innerHTML = cardYear.value;
};

cardCvc.oninput = () => {
  textCvc.innerHTML = cardCvc.value;
};

//FORM FILLING
submit.addEventListener("click", () => {
  if (cardName.value === "") {
    errName.style.display = "block";
  } else if (cardNum.value === "" || typeof cardNum.value == "String") {
    errNum.style.display = "block";
  } else if (cardMonth.value === "" || cardYear.value === "") {
    errMMYY.style.display = "block";
  } else if (cardCvc.value === "") {
    errCvc.style.display = "block";
  } else {
    cardPage.style.display = "none";
    success.style.display = "flex";
  }
});

Dismiss.addEventListener("click", () => {
  success.style.display = "none";
  cardPage.style.display = "flex";
});
