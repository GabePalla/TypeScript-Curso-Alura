export function textScape(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = metodoOriginal.apply(this, args);
        return retorno.replace(/<script>[\s\S]*?<script>/, '');
    };
    return descriptor;
}
