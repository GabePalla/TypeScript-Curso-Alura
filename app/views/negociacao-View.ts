import { textScape } from "../decorators/textScape.js";
import { ListaNegociacoes } from "../models/listaNegociacoes.js";
import { View } from "./view.js";

export class NegociacaoView extends View<ListaNegociacoes>{

    @textScape
    protected template(negociacoes: ListaNegociacoes): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    ${negociacoes.listar().map(negociacao => {
                        return `
                            <tr>
                                <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                            </tr>
                        `
                    }).join("")}
                </tbody>
                <script>alert('uasidhiuasdhui')<script>
            </table>
        `;
    }

}