import { Component, OnInit,Inject, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-order-wise-others-charges-modal',
  templateUrl: './order-wise-others-charges-modal.component.html',
  styleUrls: ['./order-wise-others-charges-modal.component.scss']
})
export class OrderWiseOthersChargesModalComponent implements OnInit {
  @ViewChild('newChargeName') newChargeNameInput: ElementRef;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref:MatDialogRef<OrderWiseOthersChargesModalComponent>) { }

  ngOnInit(): void {
  }
  AddnewCharge(){
    const newChargeName = this.newChargeNameInput.nativeElement.value;
    if(newChargeName !="")
    {
      this.data=newChargeName;
      this.ref.close(this.data);
    }
    else{
      this.ref.close("No Process Charge Entry");
    }
    
  }
}
