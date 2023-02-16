export function speedTest() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const tempoInicial = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const tempoFinal = performance.now();
            console.log(`Tempo de execução de ${propertyKey} é de ${(tempoInicial - tempoFinal) / 1000} segundos`);
            return retorno;
        };
    };
}
