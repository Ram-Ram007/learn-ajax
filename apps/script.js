$(document).ready(function () {
  const loadingIndicator = $("#loadingIndicator");

  function showLoading() {
    loadingIndicator.show();
  }

  function hideLoading() {
    loadingIndicator.hide();
  }

  function populateDropdown(dogBreeds) {
    const dropdown = $("#breedDropdown");
    dropdown.empty();
    dropdown.append('<option value="">Select a breed</option>');

    for (let i = 0; i < dogBreeds.length; i++) {
      const breed = dogBreeds[i];
      dropdown.append(`<option value="${breed}">${breed}</option>`);
    }
  }

  $("#button").click(function () {
    const selectedBreed = $("#breedDropdown").val();

    if (selectedBreed) {
      getRandomImageOfDog(selectedBreed);
    }
  });

  function getAllDogsFromApi() {
    const url = "https://dog.ceo/api/breeds/list/all";

    showLoading();

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("API request success");
        const dogsList = Object.keys(data.message); 
        console.log(dogsList);
        populateDropdown(dogsList);
      })
      .catch((error) => {
        console.log("API request error");
      })
      .finally(() => {
        console.log("API request completed");
        hideLoading();
      });
  }

  function getRandomImageOfDog(dogBreed) {
    const url = `https://dog.ceo/api/breed/${dogBreed}/images/random`;

    showLoading();

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("API request success");
        console.log(data);
        hideLoading();
        displayImage(data.message);
      })
      .catch((error) => {
        console.log("API request error");
        hideLoading();
      });
  }

  function displayImage(imageUrl) {
    const imageContainer = $("#imageContainer");

    imageContainer.empty();

    const imgElement = $("<img>");
    imgElement.attr("src", imageUrl);

    imageContainer.append(imgElement);
  }

  getAllDogsFromApi();
});
