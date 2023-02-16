export function DOMInjector(seletor: string) {
    return function DOMInjector(target: any, propertyKey: string) {
        
        const getterFunction = function() {
            return document.querySelector(seletor);
        }

        Object.defineProperty(
            target,
            propertyKey, 
            {
                get: getterFunction
            }
        )
    }
}