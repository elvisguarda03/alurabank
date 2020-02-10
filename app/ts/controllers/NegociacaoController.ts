import { MensagemView, NegociacoesView } from '../views/index';
import { NegociacaoParcial, Negociacao, Negociacoes } from '../models/index';
import { DOMInject, Throttle } from '../helpers/decorators/index';
import { NegociacaoService } from '../services/index';

export class NegociacaoController {
    @DOMInject('#data')
    private _inputData: JQuery;
    
    @DOMInject('#quantidade')
    private _inputQuantidade: JQuery;
    
    @DOMInject('#valor')
    private _inputValor: JQuery;
    private _service = new NegociacaoService();
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor () {
        // this._inputData = $('#data');
        // this._inputQuantidade = $('#quantidade');
        // this._inputValor = $('#valor');
        this._negociacoesView.update(this._negociacoes);
    }

    @Throttle()
    adiciona(event: Event): void {
        // event.preventDefault();
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

    @Throttle()
    async importaDados() {
        let negociacoes = await this._service.getNegociacoes(res => {
            console.log('Entrou');
            if (res.ok) return res;
            throw new Error(res.statusText);
        });
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