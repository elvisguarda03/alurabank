System.register(["../views/index", "../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, NegociacaoController, DayOfWeek;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_2.Negociacoes();
                    this._negociacoesView = new index_1.NegociacoesView('#negociacoesView');
                    this._mensagemView = new index_1.MensagemView('#mensagemView');
                    this._inputData = $('#data');
                    this._inputQuantidade = $('#quantidade');
                    this._inputValor = $('#valor');
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    let data = new Date(this._inputData.val().replace(/-/g, ','));
                    if (this._isBusinessDay(data)) {
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
