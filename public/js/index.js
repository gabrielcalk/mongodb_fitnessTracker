init();

async function init() {
  // Checking if exist one last workout on the params
  if (location.search.split("=")[1] === undefined) {
    const workout = await API.getLastWorkout();
  // If exist them add this workout id on the URL
    if (workout) {
      location.search = "?id=" + workout._id;
  // If don't exist, them don't let the user click on the continue button
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

