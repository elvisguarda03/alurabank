System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function LogarTempoExecucao(isSecond = false) {
        return function (target, propertyKey, descriptor) {
            const method = descriptor.value;
            descriptor.value = function (...args) {
                let unidade = 'ms';
                let divisor = 1;
                if (isSecond) {
                    unidade = 's';
                    divisor = 1000;
                }
                console.log('------------------');
                console.log(`Parâmetros passados para o método ${propertyKey}: ${JSON.stringify(args)}`);
                const t1 = performance.now();
                const result = method.apply(this, args);
                console.log(`O retorno do método ${propertyKey} é ${JSON.stringify(result)}`);
                const t2 = performance.now();
                console.log(`O método ${propertyKey} demorou ${(t2 - t1) / divisor} ${unidade}`);
                return result;
            };
            return descriptor;
        };
    }
    exports_1("LogarTempoExecucao", LogarTempoExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
