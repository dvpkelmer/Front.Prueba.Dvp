import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/core/services/crud.service';
import { USER_AUTH } from 'src/app/core/utils/constants/enpoints.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
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

  login(): void {
    let body = {
      username: this.userForm.value.username,
      password: this.userForm.value.password,
    };

    this._crudService.login(body, USER_AUTH).subscribe((res) => { 
      if (res.success) {
        this.showSuccess();
      }else{
        this.showError();
      }
    });
  }

  showSuccess() {
    this._toastr.success('Inicio de sesión Exitoso!', 'Exitoso');
  }

  showError() {
    this._toastr.error('Credenciales inlavidas!', 'Fallido');
  }

  get usernameFormControl() {
    return this.userForm.get("username");
  }

  get passwordFormControl() {
    return this.userForm.get("password");
  }

}
