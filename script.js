// ===== CÁLCULO DE FRETE =====

// Localiza o formulário de frete no HTML
const formularioFrete = document.getElementById("form-frete");

// Localiza o campo do valor total da compra
const totalCarrinho = document.getElementById("total-carrinho");

// Localiza o espaço onde será exibido o resultado
const resultadoFrete = document.getElementById("resultado-frete");

// Verifica se o formulário existe na página
if (formularioFrete) {

    // Executa esta função quando o cliente enviar o formulário
    formularioFrete.addEventListener("submit", function(event) {

        // Impede que a página seja recarregada
        event.preventDefault();

        // Obtém o valor total da compra
        const valorCompra = Number(totalCarrinho.value);

        // Verifica o valor da compra e calcula o frete
        if (valorCompra >= 200) {
            resultadoFrete.textContent = "Frete grátis!";
        } else {
            resultadoFrete.textContent = "Frete: R$ 20,00";
        }

    });

}


// ===== VALIDAÇÃO DO FORMULÁRIO DE CONTATO =====

// Localiza o formulário e seus campos
const formularioContato = document.querySelector("#form-contato");
const campoNome = document.querySelector("#nome");
const campoEmail = document.querySelector("#email");
const campoMensagem = document.querySelector("#mensagem");
const resultadoContato = document.querySelector("#resultado-contato");

// Verifica quando o cliente envia o formulário
formularioContato.addEventListener("submit", function(event) {

    // Impede o recarregamento da página
    event.preventDefault();

    // Verifica se os campos obrigatórios foram preenchidos
    if (
        campoNome.value.trim().length < 3 ||
        campoEmail.value.trim() === "" ||
        campoMensagem.value.trim().length < 5
    ) {
        resultadoContato.textContent =
            "Preencha todos os campos corretamente.";

    } else {
        resultadoContato.textContent =
            "Mensagem validada com sucesso!";

        formularioContato.reset();
    }

});


