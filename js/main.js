function clicar(){
    document.getElementById("agradecimento").innerHTML="Obrigado por clicar";
    // console.log(document.getElementById("agradecimento"));
    // alert("Obrigado por clicar!");
}

function redirecionar(){
    // window.open("https://www.linkedin.com/in/lexoliveira/");
    window.location.href = "https://www.linkedin.com/in/lexoliveira/";
}

function trocar(elemento){
    elemento.innerHTML="Obrigado por passar o mouse";
    // document.getElementById("mousemove").innerHTML="Obrigado por passar o mouse"
    // alert("Trocar Texto")
}

function voltar(elemento){
    elemento.innerHTML="Passe o mouse aqui";
    // document.getElementById("mousemove").innerHTML="Passe o mouse aqui"

}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

// function validaIdade(idade){
//     var validar;
//     if (idade >=18){
//         validar = true;
//     }else{
//         validar = false;
//     }
//     return validar;
// }

// var idade = prompt("Qual sua idade?");
// console.log(validaIdade(idade));

// function soma(n1,n2){
//     return n1+n2;
// }

// alert(soma(5,10));

// var d = new Date();
// alert(d.getDay());
// alert(d.getMonth()+1);
// alert(d.getUTCFullYear());
// alert(d.getHours());
// alert(d.getMinutes());
// alert(d.getSeconds());
// alert(d);

// for (var count=0;count<=5; count++){
//     alert(count);
// };

// var count = 0;
// while(count <=5){
//     console.log(count);
//     alert(count);
//     count++;
// }

// var idade = prompt("Qual sua idade?");
// if (idade >=18){
//     alert("Maior de idade!");
// }else{
//     alert("Menor de idade");
// }

// var fruta = {nome:"maça", cor:"vermelha"}
// console.log(fruta.nome);
// console.log(fruta.cor);

// var frutas =[{nome:"maça", cor:"vermelha"},{nome:"uva",cor:"roxa"}]
// console.log(frutas);
// console.log(frutas[0].nome);
// console.log(frutas[0].cor);
// console.log(frutas[1].nome);
// console.log(frutas[1].cor);


// var list = ["maça", "pera", "laranja"];
// list.push("uva");
// list.pop();
// console.log(list.length);
// console.log(list.reverse());
// console.log(list);
// console.log(list.toString());
// console.log(list.join("-"));

// var nome = "Lex Óliver";
// var idade = 31;
// var idade2 = 10;
// var frase = "Japão é o melhor time do mundo";
// // alert("Bem vindo "+nome+", Parabéns pelos seus "+idade+" anos.");
// alert(frase.replace("Japão","Brasil"));
// console.log(nome);
// console.log(idade + idade2);
// console.log(frase.replace("Japão","Brasil"));