import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UserInfoComponent } from './user-info.component';



@NgModule({
  declarations: [
    UserInfoComponent
    
    
  ],
  imports: [
    CommonModule,
    //CommercialRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatGridListModule,
    MatListModule,
    ReactiveFormsModule,
    //DateInputsModule
  ]
})
export class UserInfoModule { }
