export function inspect(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function(...args: Array<any>): void {
        const retorno = metodoOriginal.apply(this, args);
        console.log(`
            Método: ${propertyKey} \n Parâmetros: ${args} \n Retorno: ${retorno}
        `);
        return retorno;
    }
    return descriptor;
}