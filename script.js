const ratingCard = document.querySelector(".rating-container");
const thankYouCard = document.querySelector(".thank-you-container");
const rates = document.querySelectorAll(".rate");
const submitButton = document.getElementById("submit");
const selectedRate = document.getElementById("selected-rate");


rates.forEach( (button) => {
    button.addEventListener("click", () => {
        selectedRate.innerHTML = button.innerHTML;
    })
}) 

submitButton.addEventListener("click", () => {
    ratingCard.style.display = "none";
    thankYouCard.style.display = "flex";
});

