import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/core/services/crud.service';
import { PERSON } from 'src/app/core/utils/constants/enpoints.constants';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent {
  personForm: FormGroup;

  constructor(
    private readonly _fb: FormBuilder,
    private _crudService: CrudService,
    private _toastr: ToastrService
  ) {
    this.personForm = this._fb.group({
      identificationNumber: ['', [Validators.required]],
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      identificationType: ['', [Validators.required]],
    });
  }

  save(): void {
    let body = {
      name: this.personForm.value.name,
      lastName: this.personForm.value.lastName,
      email: this.personForm.value.email,
      identificationNumber: this.personForm.value.identificationNumber,
      identificationType: this.personForm.value.identificationType,
      concatenatedNameLastname: this.personForm.value.name + this.personForm.value.lastName,
      concatenatedTypeDocument: this.personForm.value.identificationNumber + this.personForm.value.identificationType,
    };

    this._crudService.create(body, PERSON).subscribe((res) => {
      if (res.success) {
        this.showSuccess();
      }else{
        this.showError();
      }
    });
  }

  showSuccess() {
    this._toastr.success('Registro de persona Exitoso!', 'Exitoso');
  }

  showError() {
    this._toastr.error('Registro de persona Fallido', 'Fallido');
  }


  get nameFormControl() {
    return this.personForm.get("name");
  }

  get lastNameFormControl() {
    return this.personForm.get("lastName");
  }

  get emailFormControl() {
    return this.personForm.get("email");
  }

  get identificationNumberFormControl() {
    return this.personForm.get("identificationNumber");
  }

  get identificationTypeFormControl() {
    return this.personForm.get("identificationType");
  }

}
