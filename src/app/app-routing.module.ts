import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';

import { DepositComponent } from './components/deposit/deposit.component';
//import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { AccountComponent } from './components/account/account.component';


const routes: Routes = [
  {path: '', redirectTo: 'dashboard',pathMatch: 'full'},
  
  {path: 'dashboard', component: DashboardComponent},
  {path: 'UserInfo', component: UserInfoComponent},
  {path: 'Deposit', component: DepositComponent},
  {path: 'Account', component: AccountComponent}
  //{path: 'Withdraw', component: WithdrawComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
