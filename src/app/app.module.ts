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
//import { AuthInterceptor } from './services/auth.interceptor';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './sharedpages/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
//import { RegistrationComponent } from './components/registration/terms-register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
//import { RegisterComponent } from './components/register/register.component';
import { ModalpopupComponent } from './modalpopup/modalpopup.component';
//import { InitialOrderModalComponent } from './modals/merchandising/knit/initial-order-modal/initial-order-modal.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DatePickerModule } from '@progress/kendo-angular-dateinputs';
import { MatDialogModule } from '@angular/material/dialog';
import { DepositComponent } from './components/deposit/deposit.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { UserInfoComponent } from './components/user-info/user-info.component';


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
    WithdrawComponent
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
