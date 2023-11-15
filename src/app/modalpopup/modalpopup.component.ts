import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modalpopup',
  templateUrl: './modalpopup.component.html',
  styleUrls: ['./modalpopup.component.scss']
})
export class ModalpopupComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref:MatDialogRef<ModalpopupComponent>) { }

  ngOnInit(): void {

    console.log(this.data);
  }

  Closepopup(){

    this.ref.close("Data from popup");
  }

}
