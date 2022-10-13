const imageBox = document.querySelector(".image-box");

const fetchImage = async (lon, lat, date) => {
  try {
    const response = await fetch(
      `https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&date=${date}&&dim=0.10&api_key=3JWmvXa66brft7wVMy8vyvq0pUybvHy5bcICbSd1`
    );

    if (response.status === 400 || response.status === 404) {
      alert("No image found!");
      return;
    }
    const data = await response.json();
    if (data.msg === "No imagery for specified date.") {
      alert("No image found! Try again");
    } else {
      const link = await data.url;
      const home = `<img src="${link}" class="image-result">`;
      imageBox.innerHTML = home;
    }
  } catch (error) {
    alert("No image found for the date or location! Try again.");
  }
};

export { fetchImage };
