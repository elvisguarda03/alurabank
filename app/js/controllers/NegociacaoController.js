System.register(["../views/index", "../models/index", "../helpers/decorators/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, NegociacaoController, DayOfWeek;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_2.Negociacoes();
                    this._negociacoesView = new index_1.NegociacoesView('#negociacoesView');
                    this._mensagemView = new index_1.MensagemView('#mensagemView');
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    let data = new Date(this._inputData.val().replace(/-/g, ','));
                    if (!this._isBusinessDay(data)) {
                        this._mensagemView.update('Somente negociações em dias úteis, por favor!');
                        return;
                    }
                    const negociacao = new index_2.Negociacao(data, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    console.log(negociacao);
                    this._mensagemView.update('Negociação adicionada com sucesso!');
                }
                _isBusinessDay(date) {
                    return date.getDay() != DayOfWeek.SABADO && date.getDay() != DayOfWeek.DOMINGO;
                }
            };
            __decorate([
                index_3.DOMInject('#data')
            ], NegociacaoController.prototype, "_inputData", void 0);
            __decorate([
                index_3.DOMInject('#quantidade')
            ], NegociacaoController.prototype, "_inputQuantidade", void 0);
            __decorate([
                index_3.DOMInject('#valor')
            ], NegociacaoController.prototype, "_inputValor", void 0);
            exports_1("NegociacaoController", NegociacaoController);
            (function (DayOfWeek) {
                DayOfWeek[DayOfWeek["DOMINGO"] = 0] = "DOMINGO";
                DayOfWeek[DayOfWeek["SEGUNDA"] = 1] = "SEGUNDA";
                DayOfWeek[DayOfWeek["TERCA"] = 2] = "TERCA";
                DayOfWeek[DayOfWeek["QUARTA"] = 3] = "QUARTA";
                DayOfWeek[DayOfWeek["QUINTA"] = 4] = "QUINTA";
                DayOfWeek[DayOfWeek["SEXTA"] = 5] = "SEXTA";
                DayOfWeek[DayOfWeek["SABADO"] = 6] = "SABADO";
            })(DayOfWeek || (DayOfWeek = {}));
        }
    };
});
