import { NegociacaoController } from "./controllers/negociacao-controller.js";
const btnForm = document.querySelector('.form');
const btnImportar = document.querySelector('[data-importar]');
const negociacaoController = new NegociacaoController();
btnImportar.addEventListener('click', () => {
    negociacaoController.importaNegociacoes();
});
if (btnForm != null) {
    btnForm.addEventListener('submit', (event) => {
        event.preventDefault();
        negociacaoController.adiciona();
    });
}
else {
    throw new Error('Não foi possível inicializar a aplicação. Verifique se o form existe.');
}
