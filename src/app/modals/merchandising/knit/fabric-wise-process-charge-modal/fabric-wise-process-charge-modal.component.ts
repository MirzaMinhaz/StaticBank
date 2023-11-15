import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-fabric-wise-process-charge-modal',
  templateUrl: './fabric-wise-process-charge-modal.component.html',
  styleUrls: ['./fabric-wise-process-charge-modal.component.scss']
})
export class FabricWiseProcessChargeModalComponent implements OnInit {

  @ViewChild('newChargeName') newChargeNameInput: ElementRef;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref:MatDialogRef<FabricWiseProcessChargeModalComponent>) { }

  ngOnInit(): void {
  }
  addNewProcessName(){
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
