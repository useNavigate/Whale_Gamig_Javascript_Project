import { scrollToTop } from "./navbar";

export function renderPopup() {
  const popup = document.getElementById("popup");
scrollToTop()
  popup.classList.add("p_show");

  popup.innerHTML = `
    <div class="introduction">
      <button ><i id="b_close" class="fa-solid fa-square-xmark"></i></button>
  <div>
<h1 class="welcome">Welcome to Whale Gaming 🐳</h1>

 <p>Our website offers information and data visualization based on the MMOBomb API.</p>
</div>

<div>
<h2>Navigation</h2>
<p>To navigate to different pages, you can use the <span>navbar</span> at the top of the page.</p>
</div>

<div>
<h2>Search</h2>
<p>To search for a specific game, use the <span>search bar</span> at the top of the main page.</p>
</div>

<div>
<h2>Game Details</h2>
<p>To view the details of a specific game, <span>click</span> on its <span>card</span>. This will take you to the game's detail page, where you can read about its description and more.</p>
</div>

<div>
<h2>Data Visualization</h2>
<p>To view the data visualization, navigate to the "Data Visualization" page using the <span>navbar (statistics) </span> or from main page by <span>clicking</span> <span>explore</span> button.</p>
</div>

<div>
<h2></h2>
<p>That's it! Now you should be able to explore new games and data on Whale Gaming. Happy gaming!</p>
</div>


</div>


    `;

const closeButton = document.getElementById("b_close");
      closeButton.addEventListener("click", (event) => {
        console.log(event.target)
        if (event.target == closeButton) {
          popup.style.display = "none";
        }
      });
}

