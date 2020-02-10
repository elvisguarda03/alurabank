// declare var $: any;
export abstract class View<T> {
    private _element: JQuery;
    private _scape: boolean;

    //Parâmetro opcional
    // constructor(selector: string, scape?: boolean) {
    //     this._element = $(selector);
    //     this._scape = scape;
    // }
    constructor (selector: string, scape: boolean = false) {
        this._element = $(selector);
        this._scape = scape;
    }

    update(model: T): void {
        let element = this.template(model);
        if (this._scape)
            element = element.replace(/<script>[\s\S]*?<\/script>/, '');
        
        this._element.html(this.template(model));
    }

    abstract template(model: T): string;
}