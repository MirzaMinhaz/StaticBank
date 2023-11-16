import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';


const routes: Routes = [
  {path: '', redirectTo: 'dashboard',pathMatch: 'full'},
  
  {path: 'dashboard', component: DashboardComponent},
  {
    path: 'userInfo',
    loadChildren: () => import('./components/user-info/user-info.module').then(m => m.UserInfoModule)
  },
  {path: 'Deposit', component: DepositComponent},
  {path: 'Withdraw', component: WithdrawComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
