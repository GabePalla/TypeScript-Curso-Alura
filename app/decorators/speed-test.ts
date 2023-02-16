export function speedTest() {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor

    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: Array<any>) {
            const tempoInicial = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const tempoFinal = performance.now();
            console.log(`Tempo de execução de ${propertyKey} é de ${(tempoInicial - tempoFinal) / 1000} segundos`);
            return retorno;
        }
    }
}