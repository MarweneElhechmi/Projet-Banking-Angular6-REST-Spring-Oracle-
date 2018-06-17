import { Component, OnInit  } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'app-wizard-page',
    templateUrl: './wizard.component.html',
    styleUrls: ['./wizard.component.scss'],
    animations: [routerTransition()]
})
export class WizardComponent implements OnInit  {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

    constructor(private _formBuilder: FormBuilder){}

        ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }


}
