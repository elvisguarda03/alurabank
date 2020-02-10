System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function DOMInject(selector) {
        return function (target, propertKey) {
            let element;
            const getter = function () {
                if (!element) {
                    element = $(selector);
                    console.log(`Buscando ${selector} para injetar em ${propertKey}`);
                }
                return element;
            };
            Object.defineProperty(target, propertKey, {
                get: getter
            });
        };
    }
    exports_1("DOMInject", DOMInject);
    return {
        setters: [],
        execute: function () {
        }
    };
});
