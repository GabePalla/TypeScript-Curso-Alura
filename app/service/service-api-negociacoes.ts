import { NegociacoesApi } from "../interface/negociacoes-api.js"
import { Negociacao } from "../models/negociacao.js"

export class ServiceApiNegociacoes {

    public getListaNegociacoes(): Promise<Array<Negociacao>> {
        return fetch("http://localhost:8080/dados")
            .then(resposta => resposta.json())
            .then((listaRespostaConvertida: Array<NegociacoesApi>) => {
                return listaRespostaConvertida.map(resposta => {
                    return new Negociacao(
                        new Date(),
                        resposta.montante,
                        resposta.vezes
                    )
                })
            })
    }
}