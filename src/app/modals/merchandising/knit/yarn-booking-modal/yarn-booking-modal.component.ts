import { Component, OnInit,Inject, QueryList, ViewChildren} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSnackBar,MatSnackBarVerticalPosition  } from '@angular/material/snack-bar';
import { CommonService } from 'src/app/services/common.service';
import { ColorWiseQuantityBreakdownService } from 'src/app/services/merchandising/knit/color-wise-quantity-breakdown.service';
import { YarnBookingService } from 'src/app/services/merchandising/knit/yarn-booking.service';

@Component({
  selector: 'app-yarn-booking-modal',
  templateUrl: './yarn-booking-modal.component.html',
  styleUrls: ['./yarn-booking-modal.component.scss']
})
export class YarnBookingModalComponent implements OnInit {
  @ViewChildren('colorDropdown') colorDropdowns: QueryList<any>;
  colorNameList: any;
  colorWisefabricationList: any;
  OrderQtyAndfabricationList: any;
  PrepareYarnBookingList: any;
  styleNo: any;
  uniqueOrderQty: any;
  orderQtyAndInitialOrderId:any;
  initialColor:any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private dialogRef:MatDialogRef<YarnBookingModalComponent>,
    private snackBar: MatSnackBar, 
    private colorWiseQuantityBreakdownService:ColorWiseQuantityBreakdownService,
    private yarnBookingService:YarnBookingService, 
    private commonService : CommonService, 
    //private matdialog: MatDialog
  ) { 
    debugger
    this.styleNo = this.data.styleNo;
    this.uniqueOrderQty=parseFloat(this.data.colorQty);
  }

  ngOnInit(): void {
    this.initialColor="Select Color";
    this.commonService.getOrderqtyAnddescriptionByStyleNo(this.styleNo).subscribe((list: any) => {
      debugger
      this.orderQtyAndInitialOrderId=list;
      this.commonService.getFabricColorList().subscribe((list: string) => {
        this.colorNameList = list;
        this.colorWiseQuantityBreakdownService.getfabricationByStyleNo(this.styleNo).subscribe((fabrications: any) => {
          this.colorWisefabricationList = fabrications;
          this.addFieldsOnorderQty(this.colorWisefabricationList, this.uniqueOrderQty);
          addNewAttribute(this.colorWisefabricationList); 
        });
      });
    });
  }
  displayedColumns = ['colorName','orderQty','fabrication','add','remove'];

  addFieldsOnorderQty(colorWisefabricationList: any, uniqueOrderQty: any): void {
    this.OrderQtyAndfabricationList = [
      { colorName: '', colorGroupName: '', orderQty: uniqueOrderQty, fabrication: colorWisefabricationList }
    ];
  }
  OnClickAddNewRow(index: number, item: any) {
    var totalOrderQty = calculateTotalOrderQty(this.OrderQtyAndfabricationList);
    var remainingValue = this.uniqueOrderQty - totalOrderQty;
    
    if (remainingValue ==0) {
      var newobj = JSON.parse(JSON.stringify(item.fabrication));
      var obj = {
        colorGroupName:"",
        colorName: "",
        orderQty: "",
        fabrication: newobj,
      };
      this.OrderQtyAndfabricationList.push(obj);
      let addNewRow = this.OrderQtyAndfabricationList;
      this.OrderQtyAndfabricationList = [...addNewRow];
    }
    else {
      var newobj = JSON.parse(JSON.stringify(item.fabrication));
      var obj1 = {
        colorGroupName:"",
        colorName: "",
        orderQty: remainingValue,
        fabrication: newobj,
      };
      this.OrderQtyAndfabricationList.push(obj1);
      let addNewRow = this.OrderQtyAndfabricationList;
      this.OrderQtyAndfabricationList = [...addNewRow];
    }
  }
  OnClickRemoveNewRow(row: any) {
    if (this.OrderQtyAndfabricationList) {
      var index = this.OrderQtyAndfabricationList.indexOf(row);
      if (index !== 0) {
        this.OrderQtyAndfabricationList.splice(index, 1); 
        let deleteNewRow = this.OrderQtyAndfabricationList ;
        this.OrderQtyAndfabricationList = [...deleteNewRow] ;
      }
      else{
        this.snackBar.open('First row can not be removed', 'Close', {
          duration: 2000,
          verticalPosition: 'top' 
        });
      }
    }
  }
  onTextChange(row: any, column: string, event: any,rowIndex: number) {
    var totalOrderQty = calculateTotalOrderQty(this.OrderQtyAndfabricationList);
     if(this.OrderQtyAndfabricationList.length>0){
        if(totalOrderQty>this.uniqueOrderQty ){
        row.orderQty = "";
        event.target.value = "";
        window.alert('Color-quantity should not exceed total quantity');
        }     
      }
   }
   onKeyPress(event: KeyboardEvent) {
     const inputChar = String.fromCharCode(event.keyCode);
     if (!/^[0-9]*$/.test(inputChar)) {
       event.preventDefault();
     }
   }
   onColorChange(event: any, rowIndex: any){
    const colorname = event;
    debugger
    //for dublicate Color
    var duplicateColor=0;
    this.OrderQtyAndfabricationList.forEach((item : any) => {
      if(colorname == item.colorName){
        duplicateColor = duplicateColor+1;
       
      }
    });
    if(duplicateColor>1){
       this.OrderQtyAndfabricationList[rowIndex].colorName='';
       const dropdowns = this.colorDropdowns.toArray(); 
       if (dropdowns.length > rowIndex) {
         dropdowns[rowIndex].nativeElement.value = ''; 
       }
      window.alert(colorname +' already Exist');
    }
    //for colorGroup
    this.colorNameList.forEach((item : any) => {
      if(colorname == item.colorName){
      this.OrderQtyAndfabricationList[rowIndex].colorGroupName = item.colorGroupName;
      }
    });
  }
  saveColorWiseQtyBreakdown(){
    debugger
    var totalOrderQty = calculateTotalOrderQty(this.OrderQtyAndfabricationList);
    if (totalOrderQty === this.uniqueOrderQty) {
      let allDataValid = true; 
      var savableDataList: any[] = []; 
  
      this.OrderQtyAndfabricationList.forEach((item: any) => {
      if (item.orderQty > 0){
        if (item.colorName !== '' &&item.fabrication.some((fab: any) => fab.isChecked)) {
          var colorName = item.colorName;
          var colorGroupName=item.colorGroupName;
          var orderQty = item.orderQty;
          var fabrication = item.fabrication.filter((fab: any) => fab.isChecked).map((fab: any) => fab.fabrication);
          fabrication.forEach((fabricationitem: any) => {
            savableDataList.push({ colorName,colorGroupName, orderQty, fabrication: fabricationitem });             
          })
          } 
          else{
            window.alert('Please fill in all required fields for each item.');
            allDataValid = false; 
          }
        }
      else{
        if (item.colorName !== '' &&item.fabrication.some((fab: any) => fab.isChecked)) {
            window.alert('Please fill in Color-quantity field.');
            allDataValid = false; 
          } 
          else{             
          }
        }
      });
  
      if (allDataValid) {
        if(savableDataList.length>0){
          var initialOrderId = this.orderQtyAndInitialOrderId[0].id;
          var buyerName = this.orderQtyAndInitialOrderId[0].buyerName;
          var styleNo = this.orderQtyAndInitialOrderId[0].styleNo;
          var averageColorBreakdownList = preparecolourWiseQuantityList(savableDataList,initialOrderId,buyerName,styleNo);
          this.dialogRef.close(averageColorBreakdownList);
        }
        console.log('Valid data:', savableDataList);
      } else {
        window.alert('Please fill in all required fields for each item.');
      }
    } else {
      window.alert('Color-quantity should not exceed total quantity');
    }
  }

}

function preparecolourWiseQuantityList(savableDataList:any,initialOrderId:any,buyerName:any,styleNo:any){
  var newArray: any =[];
  savableDataList.forEach((item:any) => {
    var obj ={
      "id": 0,
      "initialOrderId":  initialOrderId,
      "buyerName": buyerName,
      "styleNo": styleNo,
      "fabrication": item.fabrication,
      "color": item.colorName,
      "colorGroupName": item.colorGroupName,
      "colorQty": item.orderQty,
      "colorFroms":"Average",
      "stateStatus": "Pending",
      "entryUser": "",
      "userCode": "",
    }
    newArray.push(obj);
  })
  return newArray; 
}
function addNewAttribute(fabrications:any){
  if(fabrications && fabrications.length>0){
    fabrications.forEach((obj:any) => {
      obj['isFabricationCheck'] = false;
    });
  }
}
function calculateTotalOrderQty(OrderQtyAndfabricationList: any) {
  var totalOrderQty = OrderQtyAndfabricationList.reduce(
    (sum: number, item: any) => sum + Number(item.orderQty),
    0
  );
  console.log(totalOrderQty); 
  return totalOrderQty;
}

