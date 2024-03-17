import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { SidenavComponent } from './sharedpages/sidenav/sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SublevelMenuComponent } from './sharedpages/sidenav/sublevel-menu.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './sharedpages/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { ModalpopupComponent } from './modalpopup/modalpopup.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DatePickerModule } from '@progress/kendo-angular-dateinputs';
import { MatDialogModule } from '@angular/material/dialog';
import { DepositComponent } from './components/deposit/deposit.component';
//import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { AccountComponent } from './components/account/account.component';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    SublevelMenuComponent,
    HeaderComponent,
    ModalpopupComponent,
    UserInfoComponent,
    DepositComponent,
    //WithdrawComponent,
    AccountInfoComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatListModule,
    MatDialogModule,
    DateInputsModule,
    DatePickerModule,
    MatTableModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
