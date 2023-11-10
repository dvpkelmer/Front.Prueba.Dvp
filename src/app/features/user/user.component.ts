import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/core/services/crud.service';
import { USER } from 'src/app/core/utils/constants/enpoints.constants';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  userForm: FormGroup;

  constructor(
    private readonly _fb: FormBuilder,
    private _crudService: CrudService,
    private _toastr: ToastrService
  ) {
    this.userForm = this._fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  save(): void {
    let body = {
      username: this.userForm.value.username,
      password: this.userForm.value.password,
    };

    this._crudService.create(body, USER).subscribe((res) => {
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



  get usernameFormControl() {
    return this.userForm.get("username");
  }

  get passwordFormControl() {
    return this.userForm.get("password");
  }

}
