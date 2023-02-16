import { Imprimivel } from "../interface/imprimivel.js";
import { Negociacao } from "./negociacao.js";

export class ListaNegociacoes implements Imprimivel{

    private _listaDeNegociacoes: Array<Negociacao> = []

    public adiciona(negociacao: Negociacao) {
        this._listaDeNegociacoes.push(negociacao);
    }

    public adicionaLista(listaNegociacoes : Array<Negociacao>) {
        this._listaDeNegociacoes = [...this._listaDeNegociacoes, ...listaNegociacoes];
    }
    public listar(): ReadonlyArray<Negociacao> {
        return this._listaDeNegociacoes;
    }

    public toText(): void {
        this._listaDeNegociacoes.forEach(negociacao => {
            console.log(`
                Data: ${negociacao.data}\n
                Quantidade: ${negociacao.quantidade}\n
                Valor: ${negociacao.valor}\n
            `);
        })
    }

}