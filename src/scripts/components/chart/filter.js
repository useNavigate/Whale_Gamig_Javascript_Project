export const handleFilter = (genres) => {
  const main = document.querySelector("#main");
  const genreSelect = document.createElement("select");
  genreSelect.classList.add("genre_select");

  main.appendChild(genreSelect);

  const selectOption = document.createElement("option");
  selectOption.setAttribute("label", "Select Options");
  selectOption.setAttribute("selected", "true");
  selectOption.setAttribute("value", "nocap");

  genreSelect.appendChild(selectOption);

  console.log("coming from linearChart");
  //getting name of genres for filtering
  const genreForFilter = [];

  Object.keys(genres).forEach((keys) => {
    if (keys !== " MMORPG") {
      genreForFilter.push(keys);
    }
  });

  //get the percentage of each genre
  const genresFilter = genreForFilter.map((key) => {
    return [key, genres[key].length];
  });

  // console.log(genresFilter);

  //assigning keys to ul
  genresFilter.forEach((key, i) => {
    const genreList = document.createElement("option");
    genreList.setAttribute("value", `${key[0]}`);
    genreList.setAttribute("id", `${key[0]}`);
    console.log(key[1]);

    genreList.innerHTML = `${key[0]}`;

    genreSelect.appendChild(genreList);
  });

  const filtered = document.getElementById("Shooter");
  // console.log(filtered)
  let selectedOption = "nocap"
  genreSelect.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.value !== selectedOption) {
      console.log(event.target.value);
      selectedOption=event.target.value

    }
  });
};
