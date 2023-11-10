import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './features/layout/layout.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [      
      {
        path: 'user',
        loadChildren: () =>
          import('src/app/features/user/user.module').then((m) => m.UserModule),
      }, 
      {
        path: 'person',
        loadChildren: () =>
          import('src/app/features/person/person.module').then((m) => m.PersonModule),
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('src/app/features/login/login.module').then((m) => m.LoginModule),
      }, 
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
