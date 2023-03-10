

export const renderSearchBar = () => {
  const navBar = document.getElementById("search");
  navBar.innerHTML = `
    <label>
  <input id ="searchInput" type="text"><button>search</button>
  </label>
    `;
};





export function handleSearch(){
const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", (event) => {
      event.preventDefault();
      const searchTerm = event.target.value;
      if (event.target.value.length > 3) {
        console.log(searchTerm)
      }
    });
}


// function getSearchResult(){

// }
