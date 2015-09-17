/// <reference path="typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var forms_1 = require('angular2/forms');
// An example of typical model
var Address = (function () {
    function Address() {
    }
    return Address;
})();
function zipCodeValidator(control) {
    if (!control.value.match(/\d\d\d\d\d(-\d\d\d\d)?/)) {
        return { invalidZipCode: true };
    }
}
var LiloForm = (function () {
    function LiloForm(fb) {
        var _this = this;
        this.address = new Address();
        // defining a form model
        this.form = fb.group({
            street: [this.address.street, forms_1.required],
            city: [this.address.city, forms_1.required],
            state: [this.address.city, forms_1.required],
            zip: [this.address.zip, zipCodeValidator],
            residential: [this.address.residential]
        });
        this.form.changes.forEach(function () { return _this.form.writeTo(_this.address); });
    }
    LiloForm = __decorate([
        angular2_1.Component({
            selector: 'app'
        }),
        angular2_1.View({
            template: "\n    // explicitly defining the template of the form\n    <form [form]=\uFFFDform\uFFFD>\n      Street <input control=\"street\">\n      <div *if=\"form.hasError('street', 'required')\">Required</div>\n\n      City <input control=\"city\">\n      <div *if=\"form.hasError('city', 'required')\">Required</div>\n\n      State <input control=\"state\" size=\"2\">\n      <div *if=\"form.hasError('state', 'required')\">Required</div>\n\n      Zip <input control=\"zip\" size=\"5\">\n      <div *if=\"form.hasError('zip', 'invalidZipCode')\">\n        Zip code is invalid\n      </div>\n\n      Residential <input control=\"residential\" type=\"checkbox\">\n    </form>\n  ",
            directives: [forms_1.forms, forms_1.required]
        }), 
        __metadata('design:paramtypes', [Object])
    ], LiloForm);
    return LiloForm;
})();
angular2_1.bootstrap(LiloForm);
