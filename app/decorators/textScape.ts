export function textScape(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function(...args: Array<any>): string {
        let retorno = metodoOriginal.apply(this, args);
        return retorno.replace(/<script>[\s\S]*?<script>/, '');
    }
    return descriptor;
}