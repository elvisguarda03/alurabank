import { MensagemView, NegociacoesView } from '../views/index';
import { Negociacao, Negociacoes } from '../models/index';
import { LogarTempoExecucao, DOMInject } from '../helpers/decorators/index';

export class NegociacaoController {
    @DOMInject('#data')
    private _inputData: JQuery;
    
    @DOMInject('#quantidade')
    private _inputQuantidade: JQuery;
    
    @DOMInject('#valor')
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor () {
        // this._inputData = $('#data');
        // this._inputQuantidade = $('#quantidade');
        // this._inputValor = $('#valor');
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event): void {
        event.preventDefault();

        let data = new Date(this._inputData.val().replace(/-/g, ','));

        if (!this._isBusinessDay(data)) {
            this._mensagemView.update('Somente negociações em dias úteis, por favor!');
            return;
        }

        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this._negociacoes.adiciona(negociacao);

        // this._negociacoes.paraArray().forEach(n => {
        //     console.log(n.data);
        // });

        this._negociacoesView.update(this._negociacoes);

        console.log(negociacao);

        this._mensagemView.update('Negociação adicionada com sucesso!');
    }

    private _isBusinessDay(date: Date): boolean {
        return date.getDay() != DayOfWeek.SABADO && date.getDay() != DayOfWeek.DOMINGO;
    }
}

enum DayOfWeek {
    DOMINGO,
    SEGUNDA,
    TERCA,
    QUARTA,
    QUINTA,
    SEXTA,
    SABADO
}