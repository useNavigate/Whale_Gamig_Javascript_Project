import Example from "./scripts/example"


document.addEventListener("DOMContentLoaded",()=>{
    console.log("Hello world!")
    //npm run watch to run webpack

    //grab an html element for DOM manipulation
    const main = document.getElementById('main')
    new Example(main)
})
