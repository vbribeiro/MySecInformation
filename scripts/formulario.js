function checkboxNao() {
    const respostas = [];
    respostas.push(document.querySelector('input[name="pergunta1"]:checked').value);
    respostas.push(document.querySelector('input[name="pergunta2"]:checked').value);
    respostas.push(document.querySelector('input[name="pergunta3"]:checked').value);
    respostas.push(document.querySelector('input[name="pergunta4"]:checked').value);
    respostas.push(document.querySelector('input[name="pergunta5"]:checked').value);
    respostas.push(document.querySelector('input[name="pergunta6"]:checked').value);

    const result = respostas.filter(function (str) { return str.includes('nao'); });

    if (result.length == 1) {
        window.location.href = './resultado-compartilhamento-acidental-de-dados.html';
    } else if (result.length == 2) {
        window.location.href = './resultado-pharming.html';
    } else if (result.length == 3) {
        window.location.href = './resultado-compartilhamento-acidental-de-dados.html';
    } else if (result.length == 4) {
        window.location.href = './resultado-malware.html';
    } else if (result.length == 5) {
        window.location.href = './resultado-vishing.html';
    } else if (result.length == 6) {
        window.location.href = './resultado-phishing.html';
    } else {
        window.location.href = './resultado-seguro.html';
    }
}

const enviar = document.querySelector('#send');

enviar.addEventListener("click", () => {
    checkboxNao();
});
