const form = document.getElementById("FormContact");
const resetButton = document.getElementById("resetar");
let linhas = '';
let contacts = [];
let telefones = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addContact();
    atualizaContact();
});

resetButton.addEventListener("click", resetAgenda);

function resetAgenda() {
    linhas = '';
    contacts = [];
    telefones = [];
    atualizaContact();
}

const inputTelefone = document.getElementById("numero-contato");
inputTelefone.addEventListener("input", function(event) {
    let telefoneValue = event.target.value;

    telefoneValue = telefoneValue.replace(/\D/g, "");
    telefoneValue = telefoneValue.substring(0, 11);

    let telefoneForm = "";

    if (telefoneValue.length > 0) {
        telefoneForm += "(" + telefoneValue.substring(0, 2);
    }
    if (telefoneValue.length > 2) {
        telefoneForm += ") " + telefoneValue.substring(2, 7);
    }
    if (telefoneValue.length > 7) {
        telefoneForm += "-" + telefoneValue.substring(7);
    }

    event.target.value = telefoneForm;
});

function addContact() {
    const inputName = document.getElementById('nome-contato');
    const inputContact = document.getElementById('numero-contato');

    if (contacts.includes(inputName.value)) {
        alert('O contato já existe');
    } else if
    (telefones.includes(inputContact.value)) {
        alert('O número de telefone já está existe em outro contato');
    } else if
    (inputContact.value.replace(/\D/g, "").length !== 11) {
        alert('Digite um número de telefone válido');
    } else {
        contacts.push(inputName.value);
        telefones.push(inputContact.value);
        let linha = `<tr>`;
        linha += `<td>${inputName.value}</td>`;
        linha += `<td>${inputContact.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputName.value = '';
    inputContact.value = '';
}

function atualizaContact() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}