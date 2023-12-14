//Funções 

function adicionaItem() {
    let novoItem = document.getElementById('novo-item').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(novoItem));

    let removerBtn = document.createElement('button');
    removerBtn.appendChild(document.createTextNode('Remover'));
    removerBtn.className = 'btn-remove';
    li.appendChild(removerBtn);

    listaItems.appendChild(li);
}

function removeItem(e) {
    if (e.target.classList.contains('btn-remove')) {
        let li = e.target.parentElement;
        listaItems.removeChild(li);
    }
}
// Código

let adicionaBtn = document.getElementById('adiciona-btn');
let listaItems = document.getElementById('itens')

adicionaBtn.addEventListener('click', adicionaItem);
listaItems.addEventListener('click', removeItem);










