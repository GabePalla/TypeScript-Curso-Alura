var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { inspect } from "../decorators/inspect.js";
export class View {
    constructor(seletor, verificarTemplate) {
        this.verificarTemplate = false;
        const elementoHTML = document.querySelector(seletor);
        if (elementoHTML != null) {
            this.elemento = elementoHTML;
        }
        else {
            throw new Error(`Seletor ${seletor} não existe no DOM, Verifique!!`);
        }
        this.verificarTemplate = verificarTemplate;
    }
    update(model) {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
__decorate([
    inspect
], View.prototype, "update", null);
