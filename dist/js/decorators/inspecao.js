export function inspecao(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        const retorno = metodoOriginal.apply(this, args);
        console.log(`
            Método: ${propertyKey} \n Parâmetros: ${args} \n Retorno: ${retorno}
        `);
    };
}
