export class Negociacao {
    //private _data: Date;
    //private _valor: number;
    //private _quantidade: number;
    
    constructor (readonly data: Date, readonly quantidade: number, readonly valor: number) {}

    // get data() {
    //     return this._data;
    // }

    // get valor() {
    //     return this._valor;
    // }

    // get quantidade() {
    //     return this._quantidade;
    // }

    get volume() {
        return this.quantidade * this.valor;
    }
}