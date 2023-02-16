import { inspect } from "../decorators/inspect.js";

export abstract class View<T> {
    protected elemento: HTMLElement;
    private verificarTemplate: boolean | undefined = false;

    constructor(seletor: string, verificarTemplate?: boolean) {

        const elementoHTML = document.querySelector(seletor);
        if(elementoHTML != null) {
            this.elemento = elementoHTML as HTMLElement;
        } else {
            throw new Error(`Seletor ${seletor} não existe no DOM, Verifique!!`);
        }
        this.verificarTemplate = verificarTemplate;
    }

    protected abstract template(model: T): string 

    @inspect
    public update(model: T) {
        let template = this.template(model);
        this.elemento.innerHTML = template
    }
}