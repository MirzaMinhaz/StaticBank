import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  {path: '', redirectTo: 'dashboard',pathMatch: 'full'},
  
  {path: 'dashboard', component: DashboardComponent},
  {
    path: 'admin',
    loadChildren: () => import('./components/deposit/deposit.component').then(m => m.DepositComponent)
  }
//   {
//     path: 'dyeingFactory',
//     loadChildren: () => import('./components/dyeing-factory/dyeing-factory.module').then(m => m.DyeingFactoryModule)
//   },
//   {
//     path: 'merchandise',
//     loadChildren: () => import('./components/merchandise/merchandise.module').then(m => m.MerchandiseModule)
//   },
//   {
//     path: 'accountsFinance',
//     loadChildren: () => import('./components/accounts-finance/accounts-finance.module').then(m => m.AccountsFinanceModule)
//   },
//   {
//     path: 'commercial',
//     loadChildren: () => import('./components/commercial/commercial.module').then(m => m.CommercialModule)
//   },
//   {path: 'RegisterComponent', component: RegisterComponent},
//   {path: 'login', component: LoginComponent},
//   {path: 'register', component: RegistrationComponent},
//   {path: 'forgotpassword', component : ForgotpasswordComponent},
//   {path: 'resetpassword', component: ResetpasswordComponent},
//   {path: 'loginpage', component: TermsLoginComponent},
//   {path: 'Support', component: CRMSupportComponent},
//   {path: 'SupportList', component: CrmSupportListComponent},
//   {path: 'EmpInfo', component: EmpInfoComponent}
// ];
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
