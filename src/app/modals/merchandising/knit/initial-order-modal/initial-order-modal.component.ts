import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-initial-order-modal',
  templateUrl: './initial-order-modal.component.html',
  styleUrls: ['./initial-order-modal.component.scss']
})
export class InitialOrderModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref:MatDialogRef<InitialOrderModalComponent>) { }

  ngOnInit(): void {

    console.log(this.data);
  }

  Closepopup(){

    this.ref.close("Data from popup");
  }

}
