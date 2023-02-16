var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
    constructor() {
        this._listaDeNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacaoView("#div__lista__negociacoes", true);
        this._mensagemView = new MensagemView("#mensagemView");
        this._serviceNegociacoes = new ServiceApiNegociacoes();
        this._negociacoesView.update(this._listaDeNegociacoes);
    }
    criarNegociacao() {
        const regex = /-/g;
        const data = new Date(this._elementoData.value.replace(regex, ","));
        return new Negociacao(data, parseFloat(this._elementoQuantidade.value), parseFloat(this._elementoValor.value));
    }
    adiciona() {
        const negociacao = this.criarNegociacao();
        if (!this.ValidaDiaUtil(negociacao.data)) {
            this._mensagemView.update("Só é possivel adicionar negociações com dias uteis cadastrados.");
            this.limpaFormulario();
            return;
        }
        this._listaDeNegociacoes.adiciona(negociacao);
        this.atualizaView();
        this.limpaFormulario();
    }
    limpaFormulario() {
        this._elementoData.value = '';
        this._elementoQuantidade.value = '';
        this._elementoValor.value = '';
        this._elementoData.focus();
    }
    atualizaView() {
        this._negociacoesView.update(this._listaDeNegociacoes);
        NegociacaoUtil.imprimir(this._listaDeNegociacoes);
        this._mensagemView.update("Negociação adicionada com sucesso!!.");
    }
    ValidaDiaUtil(data) {
        return data.getDay() != DiasDaSemana.SABADO && data.getDay() != DiasDaSemana.DOMINGO;
    }
    importaNegociacoes() {
        this._serviceNegociacoes.getListaNegociacoes()
            .then(listaNegociacoesApi => {
            const listaNegociacoesFiltradas = listaNegociacoesApi.filter(negociacaoApi => {
                return !this._listaDeNegociacoes.listar().some(negociacaoView => negociacaoView.quantidade === negociacaoApi.quantidade);
            });
            this._listaDeNegociacoes.adicionaLista(listaNegociacoesFiltradas);
            this.atualizaView();
        });
    }
}
__decorate([
    DOMInjector('#data')
], NegociacaoController.prototype, "_elementoData", void 0);
__decorate([
    DOMInjector('#quantidade')
], NegociacaoController.prototype, "_elementoQuantidade", void 0);
__decorate([
    DOMInjector('#valor')
], NegociacaoController.prototype, "_elementoValor", void 0);
__decorate([
    speedTest()
], NegociacaoController.prototype, "adiciona", null);
__decorate([
    inspect
], NegociacaoController.prototype, "ValidaDiaUtil", null);
