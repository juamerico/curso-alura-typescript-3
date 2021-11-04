export function escapar(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value
    descriptor.value = function(...args: any[]) {
        //console.log(`Decorator Escapar em ação no método "${propertyKey}" da classe "${this.constructor.name}"`)
        let retorno = metodoOriginal.apply(this, args)
        if(typeof retorno === "string") {
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '')
        }
        return retorno
    }
    return descriptor
}