import { Imprimivel } from "../interface/imprimivel.js";

export class NegociacaoUtil {
    static imprimir(objeto: Imprimivel): void {
        objeto.toText();
    }
}