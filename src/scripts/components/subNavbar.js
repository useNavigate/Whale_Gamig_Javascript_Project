export const subNavbar=(genres,)=>{

  const genreForFilter = [];

  Object.keys(genres).forEach((keys) => {
    if (keys !== " MMORPG") {
      genreForFilter.push(keys);
    }
  });

  console.log("coming from subNav")
  console.log(genreForFilter)

const submenu  = document.querySelector("#submenu")
  genreForFilter.forEach((genre)=>{
    const li = document.createElement("li")
    li.innerHTML=`${genre}`

    submenu.appendChild(li)
  })

//   section.appendChild(subNavbar)
}
