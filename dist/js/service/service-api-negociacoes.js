import { Negociacao } from "../models/negociacao.js";
export class ServiceApiNegociacoes {
    getListaNegociacoes() {
        return fetch("http://localhost:8080/dados")
            .then(resposta => resposta.json())
            .then((listaRespostaConvertida) => {
            return listaRespostaConvertida.map(resposta => {
                return new Negociacao(new Date(), resposta.montante, resposta.vezes);
            });
        });
    }
}
