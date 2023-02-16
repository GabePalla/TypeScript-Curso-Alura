import { Negociacao } from "../models/negociacao.js";
import { ListaNegociacoes } from "../models/listaNegociacoes.js";
import { NegociacaoView } from "../views/negociacao-View.js";
import { MensagemView } from "../views/mensagem-view.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { speedTest } from "../decorators/speed-test.js";
import { inspect } from "../decorators/inspect.js";
import { DOMInjector } from "../decorators/dom-injector.js";
import { ServiceApiNegociacoes } from "../service/service-api-negociacoes.js";
import { NegociacaoUtil } from "../util/negociacao-util.js";


export class NegociacaoController {

    @DOMInjector('#data')
    private _elementoData: HTMLInputElement;

    @DOMInjector('#quantidade')
    private _elementoQuantidade: HTMLInputElement;

    @DOMInjector('#valor')
    private _elementoValor: HTMLInputElement;

    private _listaDeNegociacoes = new ListaNegociacoes();
    private _negociacoesView = new NegociacaoView("#div__lista__negociacoes", true);
    private _mensagemView = new MensagemView("#mensagemView");
    private _serviceNegociacoes = new ServiceApiNegociacoes();

    constructor() {
        this._negociacoesView.update(this._listaDeNegociacoes)
    }

    private criarNegociacao(): Negociacao {
        const regex = /-/g
        const data = new Date(this._elementoData.value.replace(regex, ","));
        
        return new Negociacao(data, parseFloat(this._elementoQuantidade.value), parseFloat(this._elementoValor.value));

    }
    
    @speedTest()
    public adiciona(): void {
        const negociacao = this.criarNegociacao()

        if(!this.ValidaDiaUtil(negociacao.data)) {
            this._mensagemView.update("Só é possivel adicionar negociações com dias uteis cadastrados.")
            this.limpaFormulario();
            return;
        }
        this._listaDeNegociacoes.adiciona(negociacao);
        this.atualizaView();
        this.limpaFormulario();
    }

    private limpaFormulario() {
        this._elementoData.value = '';
        this._elementoQuantidade.value = '';
        this._elementoValor.value = ''
        this._elementoData.focus()
    }

    private atualizaView() {
        this._negociacoesView.update(this._listaDeNegociacoes);
        NegociacaoUtil.imprimir(this._listaDeNegociacoes);
        this._mensagemView.update("Negociação adicionada com sucesso!!.");
    }

    @inspect
    private ValidaDiaUtil(data: Date): boolean {
        return data.getDay() != DiasDaSemana.SABADO && data.getDay() != DiasDaSemana.DOMINGO;
    }

    public importaNegociacoes(): void {
        this._serviceNegociacoes.getListaNegociacoes()
        .then(listaNegociacoesApi => {
            const listaNegociacoesFiltradas = listaNegociacoesApi.filter(negociacaoApi => {
                return !this._listaDeNegociacoes.listar().some(negociacaoView => negociacaoView.quantidade === negociacaoApi.quantidade);
            })
            this._listaDeNegociacoes.adicionaLista(listaNegociacoesFiltradas);
            this.atualizaView()
        });
    }
}