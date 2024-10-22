let contador = 0;

function movimento(direcao, callback){

  if(direcao.toLowerCase() == "esquerda"){
    callback("esquerda");
  }else if(direcao.toLowerCase() == "direita"){
    callback("direita");
  }else{
    return alert("VOCÊ ESTÁ USANDO A FUNÇÃO movimento() de forma errada");
  }
}

function controleDeImagem(direcao){
  const ROUPAS = ["camiseta", "calca", "moletom"];


  if(direcao.toLowerCase() == "esquerda"){
    if(contador == 0){
      document.getElementById(ROUPAS[contador]).style.display="none";
      contador=ROUPAS.length-1
      document.getElementById(ROUPAS[contador]).style.display="flex";
    }else{
      document.getElementById(ROUPAS[contador]).style.display="none";
      contador--
      document.getElementById(ROUPAS[contador]).style.display="flex";
    }

  }else if(direcao.toLowerCase() == "direita"){
    if(contador == ROUPAS.length-1){
      document.getElementById(ROUPAS[contador]).style.display="none";
      contador=0
      document.getElementById(ROUPAS[contador]).style.display="flex";
    }else{
      document.getElementById(ROUPAS[contador]).style.display="none";
      contador++
      document.getElementById(ROUPAS[contador]).style.display="flex";
    }
  }

}


document.getElementById("botaoEsquerdo").addEventListener("click", (e)=>{movimento("esquerda", controleDeImagem)})
document.getElementById("botaoDireito").addEventListener("click", (e)=>{movimento("direita", controleDeImagem)})

//document.getElementById(botaoEsquerdo).addEventListener("click", (e)=> {movimento("Esquerda", controleDeImagem("Esquerda"))});
//document.getElementById(botaoDireito).addEventListener("click", (e) => {movimento("Direita", controleDeImagem("Direita"))} );