import { View } from './index';

export class MensagemView extends View<string> {

    template(message: string): string {
        return `
            <p class="alert alert-info">${message}</p>
        `;
    }
}