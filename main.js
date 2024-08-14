const numeroSenha = document.querySelector('.parametro-senha__texto')
const botoes = document.querySelectorAll('.parametro-senha__botao')
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox')

console.log(checkbox[0].checkbox)

botoes[0].onclick = diminuirTamanho
botoes[1].onclick = almentarTamanhohe

let tamanhoSenha = 5
numeroSenha.textContent = tamanhoSenha

let maiuscula = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let minuscula = "abcdefghijklmnopqrstuvwxyz"
let numero = "123456789"
let simbolos = "!@#$%*?"

gerasenha()

for (i=0; i < checkbox.length;i++){
    checkbox[i].onclick = geraSenha;
}
console.log(maiuscula);

function diminuirTamanho() {
    if (tamanhoSenha > 1) 
        
    tamanhoSenha = tamanhoSenha - 1
    numeroSenha.textContent = tamanhoSenha
}

function almentarTamanho() {
    if (tamanhoSenha < 20) 
    tamanhoSenha = tamanhoSenha + 1
    numeroSenha.textContent = tamanhoSenha
}



function gerasenha(){
    let senha = ""
    for(let i = 0; i < tamanhoSenha; i++ ){
        let numeroAleatorio =Math.floor(numeroAleatorio)
        semha = senha = maiuscula[numeroAleatorio]
        consolelog(senha)
    }
    campoSenha.value = senha 
}
  
    
