!function(){"use strict";var e;e=class{constructor(e){this.ele=e,this.ele.innerHTML="<h1>It's CAPY ALIVEEEE!!!</h1>",this.handleClick=this.handleClick.bind(this),this.ele.addEventListener("click",this.handleClick)}handleClick(){this.ele.children[0].innerText="Ouch!"}},document.addEventListener("DOMContentLoaded",(()=>{console.log("Hello world!");const n=document.getElementById("main");new e(n)}))}();
//# sourceMappingURL=main.js.map