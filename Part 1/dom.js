// JavaScript - Manipulando o DOM sem a ajuda de Frameworks ou Libs, somente com o bom e velho JavaScript:

var dom = document;
// Parte 1: Basics
/* 1 - Acessando a página HTML via JavaScript:
 *  A página HTML é representada como Document no "Mundo do JavaScript"
 *
 */

// console.log(document);
// console.dir(document);

/* 2- Escrevendo coisas diretamente no HTML: Aqui, podemos escrever simplesmente texto dentro da String, ou colocar
 *  tags HTML entre Strings
 */
dom.title = "<3 JavaScript"; // Mudando a title da página via JavaScript.
dom.write('<div class="container bg-light"><h1>Ola Mundo</h1></div>'); // Adicionando uma div com Hello World na página.
// console.log(document.head); // Acessando as tags do Head dentro da página HTML através do JavaScript.
// console.log(document.body); // Acessando as tags do Body dentro da página HTML através do JavaScript.
// console.log(document.all); // Acessando o HTML como se ele fosse um array

/* 3 - Selecionando elementos no HTML e os alterando via JavaScript
 *
 */
dom.all[10].textContent = "Eu mudei o h1 dessa página via JavaScript!"; // Alterando o décimo primeiro item do HTML
console.log(dom.forms);

// OBTER ELEMENTOS PELO SEU ID:
console.log(dom.getElementById("header-title")); // Selecionando um elemento pelo seu ID. O ID do elemento deve ser passado dentro de Strings
var headerTitle = dom.getElementById("header-title"); // Atribuindo um elemento do DOM a uma variável
headerTitle.textContent = "Fui alterado novamente..."; // Assim como no exemplo acima, alteramos o conteúdo do HTML, mas de um jeito diferente.
headerTitle.innerText = "Adeus..."; // Alterando mais uma vez o elemento HTML, porém, de uma nova maneira.
headerTitle.innerHTML = "<h3>Eu sou um H3 filho do h1...</h3>"; // Inner HTML cria elementos HTML dentro de outros elementos HTML.
headerTitle.style.borderBottom = "1px solid red"; // O método style cria CSS a partir do JavaScript. O CSS criado precisa ser passado dentro de Strings

// OBTER ELEMENTOS POR SUA CLASSE:
var items = dom.getElementsByClassName("primeiro"); // Se houver mais de um item com o mesmo nome, um array será retornado.
console.log(items);
console.log(items[2]); // Pegando o segundo elemento que tenha como nome da classe 'list-group-item'
items[2].textContent = "Fui selecionado via document.getElementByClassName";
items[2].style.fontWeight = "bold";

// Também é possível fazer Loops pelos elementos da

for (var i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = "#a1b2c3";
}

// Obter elementos por TAG:
var li = dom.getElementsByTagName("li");
console.log(li[4]);
li[4].textContent = "Eu fui selecionado usando o document.getElementByTagName";
li[4].style.fontWeight = "bolder";
li[4].style.backgroundColor = "#cd4147";

// Obter um único elemento. Se houver mais de um elemento que correspondam com os parâmetros passados, somente o primeiro elemento será afetado.
// Exemplo: 5 inputs com mesmos ID's, somente o primeiro Input será afetado pelo Query Selector.
var header = dom.querySelector("#main-header"); // Para selecionar o elemento, deve=se passar entre strings algum seletor CSS acompanhado do nome, classe ou ID do elemento.
header.style.borderBottom = "solid 4px #444";

var input = dom.querySelector("input");
input.value = "Query Selector Funciona!!!";

var submit = dom.querySelector('input[type="submit"]'); // No query selector, podemos usar seletores semelhantes aos de CSS para capturar elementos.
submit.style.backgroundColor = "#e4d27c";
submit.style.color = "#333";
submit.style.fontWeight = "bold";
submit.value = "SEND";

var last = dom.querySelector(".list-group-item:last-child"); // Pseudo-classes CSS também funcionam no Query Selector
last.style.color = "blue";

// Query Selector All: Pega todos os elementos descendentes do elemento selecionado.

var titles = dom.querySelectorAll(".title");
console.log(titles);
titles[5].textContent =
  "Eu sou o último titulo, e fui pego via Query Selector All";

// Pegar os elementos ímpares
var impar = dom.querySelectorAll("li:nth-child(odd)");
for (var i = 0; i < impar.length; i++) {
  impar[i].style.backgroundColor = "#003868";
  impar[i].style.color = "#FFF";
}
