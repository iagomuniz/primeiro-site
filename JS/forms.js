const fullFormulair = document.querySelector(".form-txt-to-txt");
const formulair = {
    nameImput: fullFormulair.querySelector("#campo-nome"),
    phoneInput:fullFormulair.querySelector("#tell-cell"),
    emailInput: fullFormulair.querySelector("#campo-email"),
    send: fullFormulair.querySelector("input[submit]")
};

function adicionarNaTabela(usuario){
    let tabela = document.querySelector(table);
}

const usuarios = [];

formulair.send.addEventListener(
    "click",
    (event) => {
        let Usuario = {
            nome: formulair.nameImput.value,
            telefone: formulair.phoneInput.value,
            email: formulair.emailInput.value
        };

    }
)
