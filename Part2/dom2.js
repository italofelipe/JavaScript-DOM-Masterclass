// Aula 2 - percorrendo o DOM

var dom = document;

// Buscando por elementos pais, filhos ou análogos (irmãos)

var itemList = dom.querySelector("#items");
// Achar o pai de um elemento usando o parentNode

console.log(itemList.parentNode);

// Alterando a cor, só pra ver se funciona mesmo.
itemList.parentNode.style.backgroundColor = "#AB3598";

// Agora, vamos pegar o pai do elemento pai de itemList(#items):
console.log(itemList.parentNode.parentNode); // Output: container

// Nota: De maneira similar ao parentNode, temos o parentElement. Não irei demonstrar aqui, pois são basicamente a mesma coisa.

// Achar os filhos de um elemento com childNodes:
console.log(itemList.childNodes); // Output: NodeList(9) [text, li.list-group-item.primeiro, text, li.list-group-item.primeiro, text, li.list-group-item.primeiro, text, li.list-group-item.primeiro, text]

// De maneira similar, temos o children, mas que mostra somente os filhos diretos do elemento selecionado.
console.log(itemList.children); // Output: HTMLCollection(4) [li.list-group-item.primeiro, li.list-group-item.primeiro, li.list-group-item.primeiro, li.list-group-item.primeiro]

itemList.children[1].style.backgroundColor = "#666"; // O segundo elemento da lista foi selecionado e teve sua cor alterada

// Selecionar o primeiro filho de um elemento, independente do tipo:

console.log(itemList.firstChild); // Output: #text

// Selecionar filhos que seja um elemento:

console.log(itemList.firstElementChild); // Output: <li class="list-group-item primeiro">Item 1</li>

itemList.firstElementChild.textContent =
  "Fui alterado através do firstChildElement";

// Em oposição ao item anterior, o lastElementChild pega o ultimo filho de um certo elemento:

console.log(itemList.lastElementChild); // Output: <li class="list-group-item primeiro">Item 4</li>

itemList.lastElementChild.textContent =
  "Fui alterado através do lastChildElement";

// Obter o elemento irmão

console.log(itemList.nextSibling); // Output: #text

// Obter o próximo elemento irmão
console.log(itemList.nextElementSibling); // Output: <span>Algo nesse span</span>

// Obter o elemento irmão anterior
console.log(itemList.previousSibling); // Output: #text

// Obter o elemento irmão anterior
console.log(itemList.previousElementSibling); // Output: <h2 class="title">Items</h2>
itemList.previousElementSibling.style.color = "#45AC12";

// Criar Elementos HTML totalmente via JavaScript:

// Criar uma div

var newDiv = dom.createElement("div");
console.log(newDiv); // Output: <div></div>

// Adicionar uma classe à essa div recém criada:
newDiv.className = "container bg-dark";
console.log(newDiv);

// Adicionar um ID ao elemento
newDiv.id = "main2";

// Adicionar um atributo ao elemento:
newDiv.setAttribute("title", "Hello Div");

// Criar um texto e colocá-lo na nossa nova Div
var newDivText = dom.createTextNode("Hello World!");
newDiv.appendChild(newDivText);

// Inserir o elemento criado na DOM e torná-lo visível

var container = dom.querySelector("header .container");
var h1 = dom.querySelector("header h1");
container.insertBefore(newDiv, h1); // Output: Uma div foi criada no header, antes de Item Lister!
