import { Negociacao, NegociacaoParcial } from '../models/index';

export class NegociacaoService {
    async getNegociacoes(handler: HandlerFunction): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
            .then(res => handler(res))
            .then(res => res.json())
            .then( (data: NegociacaoParcial[]) =>
                data
                    .map(d => new Negociacao(new Date(), d.vezes, d.montante))
            );
    }
}

export interface HandlerFunction {
    (res: Response): Response;
}