let generateQuote = document.querySelector("#generate");
let copy = document.querySelector("#copyQuote");

let Quote = document.querySelector("#Quote");

generateQuote.addEventListener("click", () => {
  fetch("https://quotes-api-self.vercel.app/quote")
    .then((response) => response.json())
    .then((data) => {
      // Handle the retrieved quote
      console.log(data);
      Quote.innerHTML = data.quote;
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
      Quote.innerHTML = "Loading....";
    });
});

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(Quote.textContent);
});
