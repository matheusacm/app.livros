const rota = window.location.hash;
console.log(rota)
console.log(typeof rota)
console.log(typeof `/#inicio`)
console.log(rota === `/#inicio`)
if(rota === `#;inicio`){
    console.log("Pagina Inicial")
}else if(rota === `#contato`){
    console.log("Pagina de contato")
}else{
    console;log("Pagina não encontrada")
}


const idade = 18;
const sexo = "M";
if(idade <=18){
    console.log("Pode entrar")
}else if(idade >= 30 &&  idade < 60){
       console.log("Pode entrar, mas cuidado com a saúde")
}else if(idade <= 30 && sexo === "F"){
    console.log("Entrada Free")
}


const estudante = true;

if(estudante){
    console.log("Meia entrada")
}else{
    console.log("entrada normal")
}
