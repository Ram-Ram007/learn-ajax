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

  $("#breedDropdown").change(function () {  //change is a event that exsicute when there is a change in ui
    const selectedBreed = $(this).val();//this,val is used to take cuurent value in drop down box

    if (selectedBreed) {
      getRandomImageOfDog(selectedBreed);
    }
  });

  function getAllDogsFromApi() { // this function is used to makes an AJAX GET request to the dog API to retrieve a list of all dog breeds.
    const url = "https://dog.ceo/api/breeds/list/all";
    $.ajax(url, {
      method: "GET",
      success: function (resp) {
        console.log("API request success");
        const dogsList = Object.keys(resp.message);
        console.log(dogsList);
        populateDropdown(dogsList);
      },
      error: function () {
        console.log("API request error");
      },
      complete: function () {
        console.log("API request completed");
        },
       });
    
  }
    //The code snippet defines a function called getRandomImageOfDog that takes a dog breed as input and makes an AJAX GET request to the dog API to retrieve a random image of a dog of that breed.
  function getRandomImageOfDog(dogBreed) {
    const url = `https://dog.ceo/api/breed/${dogBreed}/images/random`;
    showLoading(); 
    $.ajax(url, {
      method: "GET",
      success: function (resp) {
        console.log("API request success");
        console.log(resp);
        hideLoading();
        displayImage(resp.message);
      },
      error: function () {
        console.log("API request error");
      },
    });
  }
  //every time the image url change the argument is also change and start calling the function
  function displayImage(imageUrl) {
    const imageContainer = $("#imageContainer");

    imageContainer.empty();

    const imgElement = $("<img>");
    imgElement.attr("src", imageUrl);

    imageContainer.append(imgElement);
  }

  getAllDogsFromApi();
});
