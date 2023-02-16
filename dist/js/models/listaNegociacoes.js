export class ListaNegociacoes {
    constructor() {
        this._listaDeNegociacoes = [];
    }
    adiciona(negociacao) {
        this._listaDeNegociacoes.push(negociacao);
    }
    adicionaLista(listaNegociacoes) {
        this._listaDeNegociacoes = [...this._listaDeNegociacoes, ...listaNegociacoes];
    }
    listar() {
        return this._listaDeNegociacoes;
    }
    toText() {
        this._listaDeNegociacoes.forEach(negociacao => {
            console.log(`
                Data: ${negociacao.data}\n
                Quantidade: ${negociacao.quantidade}\n
                Valor: ${negociacao.valor}\n
            `);
        });
    }
}
