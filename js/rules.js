const btnRules = document.querySelector("#btn_rules");
const divRules = document.querySelector(".modal__rules");
const divRulesX = document.querySelector("#rules__X")
const container__game = document.querySelector(".container__game");


var a = 1;

btnRules.addEventListener("click" , ()=>{
    divRules.style.display = "block";
    btnRules.style.display = 'none';
    container__game.style.filter = "blur(8px)";
});

divRulesX.addEventListener("click", ()=>{
  divRules.style.display = "none";
  btnRules.style.display = 'flex';
  container__game.style.filter = "blur(0px)";
})

var altura = window.screen.height;
var largura = window.screen.width;



