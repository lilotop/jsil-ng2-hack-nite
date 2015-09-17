/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {forms, required} from 'angular2/forms';

// An example of typical model
class Address {
    street: string;
    city: string;
    state: string;
    zip: string;
    residential: boolean;
}

function zipCodeValidator(control) {
    if (! control.value.match(/\d\d\d\d\d(-\d\d\d\d)?/)){
        return {invalidZipCode: true};
    }
}

@Component({
    selector: 'app'
})
@View({
    template: `
    // explicitly defining the template of the form
    <form [form]=”form”>
      Street <input control="street">
      <div *if="form.hasError('street', 'required')">Required</div>

      City <input control="city">
      <div *if="form.hasError('city', 'required')">Required</div>

      State <input control="state" size="2">
      <div *if="form.hasError('state', 'required')">Required</div>

      Zip <input control="zip" size="5">
      <div *if="form.hasError('zip', 'invalidZipCode')">
        Zip code is invalid
      </div>

      Residential <input control="residential" type="checkbox">
    </form>
  `,
    directives: [forms, required]
})
class LiloForm {
    address: Address;
    form: any; // what type does the fb.group return?

    constructor(fb: FormBuilder) {
        this.address = new Address();

        // defining a form model
        this.form = fb.group(<any>{
            street: [this.address.street, required],

        city: [this.address.city, required],
            state: [this.address.city, required],
            zip: [this.address.zip, zipCodeValidator],
            residential: [this.address.residential]
        });

        this.form.changes.forEach(() => this.form.writeTo(this.address));
    }
}

bootstrap(LiloForm);