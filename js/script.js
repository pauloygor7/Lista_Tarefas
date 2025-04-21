let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");
let btnDelete = document.getElementById("btn-remove");
let contador = 0;

input.addEventListener("keyup", function (event) {
  // a numeração do ENTER é 13
  if (event.keyCode === 13) {
    event.preventDefault();
    btnAdd.click();
  }
});

function adicionarTarefa() {
  let valorInput = input.value;

  if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {
    let novoItem = `<div id="${contador}" class="item">
            <div ondblclick="desmarcaTarefa(${contador})" onclick="marcarTarefa(${contador})" class="item-icone">
              <span class="mdi mdi-radiobox-blank" id="icone_${contador}"></span>
            </div>
            <div ondblclick="desmarcaTarefa(${contador})" onclick="marcarTarefa(${contador})" id="${contador}" class="item-nome">
                <p>${valorInput}</p>
            </div>
            <div class="item-botao">
                <button onclick="deletarTarefa(${contador})" id="btn-remove"><img src="img/lixo.png" alt="">Deletar</button>
            </div>
        </div>`;

    ++contador;

    main.innerHTML += novoItem;

    input.value = "";
    input.focus();

    document.getElementById("campo-texto").innerHTML = "";
  } else {
    document.getElementById("campo-texto").innerHTML =
      "- Não tem nada escrito na barra de tarefa! -";
  }
}

function deletarTarefa(id) {
  var tarefa = document.getElementById(id);
  tarefa.remove();
}

function marcarTarefa(id) {
  let itemMarcado = document.getElementById(id);
  let classe = itemMarcado.getAttribute("class");

  if (classe === "item") {
    itemMarcado.className = "item clicado";

    let icone = document.getElementById("icone_" + id);
    icone.className = "mdi mdi-check-circle";
    icone.style.color = "green";
  }
}

function desmarcaTarefa(id) {
  let itemMarcado = document.getElementById(id);
  let classe = itemMarcado.getAttribute("class");

  if (classe == "item clicado") {
    itemMarcado.className.remove("item clicado");
    itemMarcado.className.add("item");
  }
}
