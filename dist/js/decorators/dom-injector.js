export function DOMInjector(seletor) {
    return function DOMInjector(target, propertyKey) {
        const getterFunction = function () {
            return document.querySelector(seletor);
        };
        Object.defineProperty(target, propertyKey, {
            get: getterFunction
        });
    };
}
