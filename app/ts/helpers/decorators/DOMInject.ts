export function DOMInject(selector: string) {
    
    return function (target: any, propertKey: string) {
        let element: JQuery;

        const getter = function () {
            if (!element) {
                element = $(selector);
                console.log(`Buscando ${selector} para injetar em ${propertKey}`);
            }
            
            return element;
        }

        Object.defineProperty(target, propertKey, {
            get: getter
        });
    }
}