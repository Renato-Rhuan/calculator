function adicionarCaractere(caractere) {
    const valorDisplay = document.querySelector('.display').value;

    document.querySelector('.display').value = valorDisplay + caractere;
}


function limparDisplay() {
    document.querySelector('.display').value = '';
}

function calcular() {
    const valorDisplay = document.querySelector('.display').value;  

    document.querySelector('.display').value = eval(valorDisplay)
}

function inverterSinal() {
    const valorDisplay = document.querySelector('.display').value;

    document.querySelector('.display').value = valorDisplay * -1
}
