System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(selector, scape = false) {
                    this._element = $(selector);
                    this._scape = scape;
                }
                update(model) {
                    let element = this.template(model);
                    if (this._scape)
                        element = element.replace(/<script>[\s\S]*?<\/script>/, '');
                    this._element.html(this.template(model));
                }
            };
            exports_1("View", View);
        }
    };
});
