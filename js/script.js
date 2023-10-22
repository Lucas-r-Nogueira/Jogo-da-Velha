// Constantes das imagens
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissor");

// Partes do Jogo
const inicioDoJogo = document.querySelector(".game__Simbols");
const resultadoDoJogo = document.querySelector(".game__decision_symbols");

// Simbolos design
const corBordaImg = document.querySelector(".backjs");
const imgEscolhida = document.getElementById("img_picked");

// Resultados
const placar = document.querySelector("#text_score_result");
const placarTentativa = document.querySelector("#text_tentativas_result");
const botaoJogarNovamente = document.querySelector(".button__play");
const winLose = document.querySelector(".win__lose");

var pickDoJogador;
var contadorWins = 0;
var contadorTentativas = 0;

// constantes do design do bot
const imgbot = document.getElementById("img__bot");
const divimgbot = document.querySelector(".bot__pick");
const divsimbolsbot = document.querySelector(".div__simbols__bot");


divimgbot.style.backgroundColor = "white";
divimgbot.style.boxShadow = "inset 0px 5px rgba(179, 179, 179, 0.5) ";

function GerarAleatoriedadeBot() {
  var numeroAleatorio = Math.floor(Math.random() * 3);
  var escolhasDoBot = ['rock','scissors','paper'];
  var pickDoBot = escolhasDoBot[numeroAleatorio];
  console.log("escolha do bot na Função gerar aleatoriedade " + pickDoBot);
  
  if (pickDoBot === 'rock') {
    divsimbolsbot.style.backgroundColor = "hsl(349, 70%, 56%)";
    divsimbolsbot.style.boxShadow = "inset 0px -6px hsl(349, 66%, 40%)";
    imgbot.src = "././images/icon-rock.svg";
  } else if (pickDoBot === 'scissors') {
    divsimbolsbot.style.backgroundColor = "hsl(39, 89%, 49%)";
    divsimbolsbot.style.boxShadow = "inset 0px -6px hsl(39, 81%, 43%)";
    imgbot.src = "././images/icon-scissors.svg";
  } else if (pickDoBot === 'paper') {
    divsimbolsbot.style.backgroundColor = "hsl(230, 89%, 62%)";
    divsimbolsbot.style.boxShadow = "inset 0px -6px hsl(230, 42%, 47%)";
    imgbot.src = "././images/icon-paper.svg";
  }
  return pickDoBot
}

//--------------------------------------

// Botão Jogar Novamente

const estiloDoBotao = {
  win: function(){
    return botaoJogarNovamente.style.color = "hsl(229, 64%, 46%)";
  },
  lose: function(){
    return botaoJogarNovamente.style.color = "#d03f1b";
  },
  draw: function(){
    return botaoJogarNovamente.style.color = "hsl(229, 64%, 46%)";
  }
}

const textoBotao = {
  textWin: function(){
    return  winLose.innerHTML = "Você ganhou";
  },
  textLose: function(){
    return winLose.innerHTML = "Você Perdeu";
  },
  textDraw: function(){
    return winLose.innerHTML = "Empate";
  },
  textReset: function(){
    return winLose.innerHTML = " ";
  }
}

function EstadoBotaoPlayAgain(){
  inicioDoJogo.style.display ='flex';
  resultadoDoJogo.style.display = 'none';
}

//  ---------------------------------------
// Logica do Jogo
// Escolha do Jogador

rock.addEventListener("click", () =>{
  inicioDoJogo.style.display = "none";
  resultadoDoJogo.style.display = "flex";
  corBordaImg.style.backgroundColor = "hsl(349, 70%, 56%)";
  corBordaImg.style.boxShadow = "inset 0px -6px hsl(349, 66%, 40%)";
  imgEscolhida.src = "././images/icon-rock.svg";
  GerarAleatoriedadeBot();

  textoBotao['textReset']();
  botaoJogarNovamente.style.display = "flex";  
  pickDoJogador = "rock";
  let pickDoBot = GerarAleatoriedadeBot();
  contadorTentativas++;
  placarTentativa.innerHTML = contadorTentativas;
  console.log("Jogador "+ pickDoJogador);

  if(pickDoBot === "rock"){
    estiloDoBotao['draw']();
    textoBotao['textDraw']();
    placar.innerHTML = contadorWins;
    console.log("caiu no if do rock")
  }else if(pickDoBot === 'scissors'){
    estiloDoBotao['win']();
    textoBotao['textWin']();
    contadorWins++;
    placar.innerHTML = contadorWins;
    console.log("caiu no if do scissors");
  }else{
    estiloDoBotao['lose']();
    textoBotao['textLose']();
    console.log("caiu no if do paper")
  }
});

paper.addEventListener("click", ()=>{
  inicioDoJogo.style.display = "none";
  resultadoDoJogo.style.display = "flex";
  corBordaImg.style.backgroundColor = "hsl(230, 89%, 62%)";
  corBordaImg.style.boxShadow = "inset 0px -6px hsl(230, 42%, 47%)";
  imgEscolhida.src = "././images/icon-paper.svg";
  GerarAleatoriedadeBot();

  textoBotao['textReset']();
  botaoJogarNovamente.style.display = "flex";  
  pickDoJogador = "paper";
  contadorTentativas++;
  placarTentativa.innerHTML = contadorTentativas;
  let pickDoBot = GerarAleatoriedadeBot();
  console.log("Jogador"+ pickDoJogador);

  if(pickDoBot === "rock"){
    estiloDoBotao['win']();
    textoBotao['textWin']();
    contadorWins++;
    placar.innerHTML = contadorWins;
  }else if(pickDoBot === 'scissors'){
    estiloDoBotao['lose']();
    textoBotao['textLose']();
  }else{
    estiloDoBotao['draw']();
    textoBotao['textDraw']();
    placar.innerHTML = contadorWins;
  }
});

scissors.addEventListener("click", ()=>{
  inicioDoJogo.style.display = "none";
  resultadoDoJogo.style.display = "flex";
  corBordaImg.style.backgroundColor = "hsl(39, 89%, 49%)";
  corBordaImg.style.boxShadow = "inset 0px -6px hsl(39, 81%, 43%)";
  imgEscolhida.src = "././images/icon-scissors.svg";
  GerarAleatoriedadeBot();

  textoBotao['textReset']();
  botaoJogarNovamente.style.display = "flex";  
  pickDoJogador = "scissors";
  contadorTentativas++;
  placarTentativa.innerHTML = contadorTentativas;
  let pickDoBot = GerarAleatoriedadeBot();
  console.log("Jogador"+ pickDoJogador);

  if(pickDoBot === "rock"){
    estiloDoBotao['lose']();
    textoBotao['textLose']();
  }else if(pickDoBot === 'scissors'){
    estiloDoBotao['draw']();
    textoBotao['textDraw']();
    placar.innerHTML = contadorWins;
  }else{
    estiloDoBotao['win']();
    textoBotao['textWin']();
    contadorWins++;
    placar.innerHTML = contadorWins;
  }
});