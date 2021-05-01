import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './infras/auth.guard';
import { ConverterComponent } from './views/converter/converter.component';
import { DefaultLayoutComponent } from './views/layout/default-layout/default-layout.component';
import { LoginComponent } from './views/login/login.component';
import { NgModule } from '@angular/core';
import { SettingComponent } from './views/setting/setting.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'convert'
      },
      {
        path: 'convert',
        component: ConverterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        canActivate: [AuthGuard],
        path: 'setting',
        component: SettingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
