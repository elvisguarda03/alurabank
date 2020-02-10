System.register(["../models/index"], function (exports_1, context_1) {
    "use strict";
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, NegociacaoService;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            NegociacaoService = class NegociacaoService {
                getNegociacoes(handler) {
                    return __awaiter(this, void 0, void 0, function* () {
                        return fetch('http://localhost:8080/dados')
                            .then(res => handler(res))
                            .then(res => res.json())
                            .then((data) => data
                            .map(d => new index_1.Negociacao(new Date(), d.vezes, d.montante)));
                    });
                }
            };
            exports_1("NegociacaoService", NegociacaoService);
        }
    };
});
