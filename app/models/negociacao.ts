import { Imprimivel } from "../interface/imprimivel.js";


export class Negociacao implements Imprimivel{

    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) {}

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        return new Date(this._data.getTime())
    }

    public toText(): void {
        console.log(`
            Data: ${this._data}\n
            Quantidade: ${this.quantidade}\n
            Valor: ${this.valor}
        `);
    }

}