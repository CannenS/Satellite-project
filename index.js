import { fetchImage } from "./fetchImage.js";
const imageBox = document.querySelector(".image-box");
const homeBtn = document.querySelector(".home-btn");
const dateForm = document.querySelector(".date-form");
const dateInput = document.querySelector(".date-input");
const customBtn = document.querySelector(".custom-btn");
const returnBtn = document.querySelector(".return-btn");

dateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const success = (pos) => {
    // Get users device coords
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
    const userData = dateInput.value;

    fetchImage(longitude, latitude, userData);

    dateForm.classList.add("hidden");
    imageBox.classList.remove("hidden");
    returnBtn.classList.remove("hidden");
  };
  navigator.geolocation.getCurrentPosition(success);
});

// Button Functionality

homeBtn.addEventListener("click", () => {
  homeBtn.classList.add("hidden");
  customBtn.classList.add("hidden");
  dateForm.classList.remove("hidden");
});

returnBtn.addEventListener("click", () => {
  returnBtn.classList.add("hidden");
  imageBox.classList.add("hidden");
  homeBtn.classList.remove("hidden");
  customBtn.classList.remove("hidden");
});
