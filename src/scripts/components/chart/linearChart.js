export const handleLinearNavbar = (genres) => {
  const main = document.querySelector("#main");
  const lineNavbar = document.createElement("ul")
  lineNavbar.classList.add("line_navbar")
main.appendChild(lineNavbar)

const genreForFilter=[]
console.log("coming from linearChart")
//geting name of genres for filtering
console.log(Object.keys(genres))

};
