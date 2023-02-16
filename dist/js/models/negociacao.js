export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        return new Date(this._data.getTime());
    }
    toText() {
        console.log(`
            Data: ${this._data}\n
            Quantidade: ${this.quantidade}\n
            Valor: ${this.valor}
        `);
    }
}
