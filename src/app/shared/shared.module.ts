import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./layout/header/header.component";
import { LayoutModule } from "@angular/cdk/layout";

// Services

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    LayoutModule
  ],
  exports: [
    HeaderComponent,

    // Modules
    FormsModule,
    ReactiveFormsModule,
    RouterModule,    
  ],
  providers: [],
})
export class SharedModule { }
