import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonComponent } from './person.component';
import { PersonRoutingModule } from './person-routing.module';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [
    PersonComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(), // ToastrModule added

  ],
  providers :[ToastrService]
})
export class PersonModule { }
