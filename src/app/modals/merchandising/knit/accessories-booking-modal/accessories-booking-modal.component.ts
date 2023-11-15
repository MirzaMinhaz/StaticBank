import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CommonService } from 'src/app/services/common.service';
import { AccessoriesBookingService } from 'src/app/services/merchandising/knit/accessories-booking.service';

@Component({
  selector: 'app-accessories-booking-modal',
  templateUrl: './accessories-booking-modal.component.html',
  styleUrls: ['./accessories-booking-modal.component.scss']
})
export class AccessoriesBookingModalComponent implements OnInit {

  colorWiseBookingList: any[] = [];
  orderSensivityList: any[] = [];
  sizeSensivityList: any[] = [];
  colorSensivityList: any[] = [];
  
  
  displayedSizeSensitive: string[] = [];
  displayedColorSensitive: string[] = [];
  displayedcreateTableColorWiseSizeSensitive: string[] = ['color'];
  styleNo: any;
  buyerName: any;
  initialOrderId: any;
  CalculateTotalPriceSum:any;
  accessoriesBookingItem: any;
  accessoriesBookingForm: FormGroup;
  TotalConsumption: any;
  TotalQty: any;
  TotalOrderValue: any;
  PDFRate: any;
  AccessoriesName: any;
  ItemUnit: any;
  dropdownList:any;
  ConsumptionPerDz: any;
  WastagePerDz: any;
  mergColorList: any;
  sizesList: any;
  supplierName:any;
  copyColorWiseBookingList:any;
  unitConversionList:any;
  selectedUnit: string = '';
  convertedQty: number;
  totalPriceSum: number = 0;
  accessoriesQty: any[] = [];
  accessoriesValue: any[] = [];
  colorSensitiveList: any[] = [];
  sizeSensitiveList: any[] = [];
  chkOrderSensitive: boolean = false;
  chkColorSensitive: boolean = false;
  chkSizeSensitive: boolean = false;
  chkColorWiseSizeSensitive: boolean = false;
  dataSource: MatTableDataSource<any>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private accessoriesBookingService: AccessoriesBookingService,
    private ref: MatDialogRef<AccessoriesBookingModalComponent>) {
      var data:any = [
        {
          rate: '',
          accessoriersQty: '',
          totalPrice: '',
        },  
      ];
      this.orderSensivityList = data;
    }

  displayedColumnsForOrderSensitive = ['rate', 'accessoriersQty', 'totalPrice'];
  displayedColumnsForcolorSensitive = ['color','rate', 'accessoriersQty', 'totalPrice'];
  displayedColumnsForsizeSensitive = ['size','rate', 'accessoriersQty', 'totalPrice']

  ngOnInit(): void {
    debugger
    this.accessoriesBookingForm = this.formBuilder.group({
      approvedTotalConsumption: ['', [Validators.required]],
      approvedTotalQty: ['', [Validators.required]],
      approvedRate: ['', [Validators.required]],
      PreBookingValue: ['', [Validators.required]],
      approvedTotalOrderValue: ['', [Validators.required]],
      accessoriesName: ['', [Validators.required]],
      convertedAccessoriesQty: ['', [Validators.required]],
      approvedConsumptionPerDz: ['', [Validators.required]],
      unitType: [this.selectedUnit, Validators.required],

    });
    this.buyerName = this.data.buyerName;
    this.styleNo = this.data.styleNo;
    this.initialOrderId = this.data.initialOrderId;
    var accessoriesBookingItem = this.data.accessoriesBookingItem;
    var rowIndex = this.data.rowIndex;
    var row = accessoriesBookingItem[rowIndex];
    this.TotalConsumption = accessoriesBookingItem[rowIndex].approvedTotalConsumption;
    this.TotalQty = accessoriesBookingItem[rowIndex].approvedTotalQty;
    this.TotalOrderValue = accessoriesBookingItem[rowIndex].approvedTotalOrderValue;
    this.PDFRate = accessoriesBookingItem[rowIndex].approvedRate;
    this.AccessoriesName = accessoriesBookingItem[rowIndex].accessoriesName;
    this.supplierName = accessoriesBookingItem[rowIndex].supplierName;
    this.ItemUnit = accessoriesBookingItem[rowIndex].itemUnit;
    this.ConsumptionPerDz = accessoriesBookingItem[rowIndex].approvedConsumptionPerDz;
    this.WastagePerDz = accessoriesBookingItem[rowIndex].approvedWastagePerDz;
    let styleNo = this.data.styleNo;

    this.accessoriesBookingService.getUnitConversionList().subscribe((list: string) => {
      this.unitConversionList = list;
      this.dropdownList = getdropdownList(list,this.ItemUnit);
    this.commonService.getSizesByStyleNo(styleNo).subscribe((list: any) => {
      this.sizesList = list;
      this.accessoriesBookingService.getColorInfo(styleNo).subscribe((list: string) => {
        var allColorList = list;
        var uniqueColorList = removeDuplicateItems(allColorList);
        this.displayedcreateTableColorWiseSizeSensitive = createTableColorWiseSizeSensitive(this.sizesList, this.displayedcreateTableColorWiseSizeSensitive)
        this.colorWiseBookingList = getColorWiseBookingList(uniqueColorList, this.sizesList);
        this.colorSensitiveList = preparecolorSensitiveList(uniqueColorList);
        this.sizeSensitiveList = preparesizeSensitiveList(this.sizesList);
      });
    });
  });
    

  }
  calOrderSensitivTotalPrice(OrderSensitive: any,event:any) {
    if (!this.selectedUnit) {
      alert("Please select a unit type before entering values."); 
      OrderSensitive.rate = "";
      OrderSensitive.accessoriersQty = "";
      event.target.value = "";
    }
    const rate: number = +OrderSensitive.rate;
    const accessoriersQty: number = +OrderSensitive.accessoriersQty;
    var totalPrice = rate * accessoriersQty;
    if(rate && accessoriersQty){
    if(totalPrice <= this.TotalOrderValue){
      OrderSensitive.totalPrice = totalPrice;
    }else {
      OrderSensitive.totalPrice = "";
      OrderSensitive.accessoriersQty = "";
      window.alert('Total Price should not exceed total Accessories Cost');
    }
  }
  }
  calColorSensitive(colorSensitive: any,event:any) {
    if (!this.selectedUnit) {
      alert("Please select a unit type before entering values."); 
      colorSensitive.rate = "";
      colorSensitive.accessoriersQty = "";
      event.target.value = "";
    }
    const rate : number = +colorSensitive.rate;
    const accessoriersQty : number = +colorSensitive.accessoriersQty;
    if(rate && accessoriersQty){
    const calculateValue = rate * accessoriersQty;
    colorSensitive.totalPrice = calculateValue;
    var CalculateTotalPriceSum = getCalculateTotalPriceSumColor(this.colorSensitiveList);
    if (CalculateTotalPriceSum > this.TotalOrderValue) {
      colorSensitive.accessoriersQty = "";
      colorSensitive.totalPrice = "";
      window.alert('Total Price should not exceed total Accessories Cost');
    } 
    }
  }
  calSizeSensitive(sizeSensitive: any,event:any) {
    if (!this.selectedUnit) {
      alert("Please select a unit type before entering values."); 
      sizeSensitive.rate = "";
      sizeSensitive.accessoriersQty = "";
      event.target.value = "";
    }
    const rate : number = +sizeSensitive.rate;
    const accessoriersQty : number = +sizeSensitive.accessoriersQty;
    if(rate && accessoriersQty){
    const calculateValue = rate * accessoriersQty;
    sizeSensitive.totalPrice = calculateValue;
    var CalculateTotalPriceSum = getCalculateTotalPriceSumSize(this.sizeSensitiveList);
    if (CalculateTotalPriceSum > this.TotalOrderValue) {
      sizeSensitive.accessoriersQty = "";
      sizeSensitive.totalPrice = "";
      window.alert('Total Price should not exceed total Accessories Cost');
    } 
    }
  }
  calColorWiseSizeSensitive(element: any, column: string,event:any){
    if (!this.selectedUnit) {
      alert("Please select a unit type before entering values."); 
      element[column] = "";
      element[column + 'accessoriersQty'] = "";
      event.target.value = "";
    }
   const rate : number = +element[column];
    const accessoriersQty : number = +element[column + 'accessoriersQty'];
    if(rate && accessoriersQty){
    const calculateValue = rate * accessoriersQty;
    element[column + 'totalprice'] = calculateValue;
    var CalculateTotalPriceSum = getCalculateTotalPriceSumColorSize(this.colorWiseBookingList);
    if (CalculateTotalPriceSum > this.TotalOrderValue) {
      element[column + 'accessoriersQty'] = "";
      element[column + 'totalprice'] = "";
      window.alert('Total Price should not exceed total Accessories Cost');
    } 
    }
  }

  convertQuantity() {
    const operationMappings: {[key: string]: (a: number, b: number) => number} = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
    };
    const unitTypeControl = this.accessoriesBookingForm.get('unitType');
    if (unitTypeControl && unitTypeControl.value) {
      this.unitConversionList.forEach((unit: any) => {
      if (this.ItemUnit === unit.unitFrom && unitTypeControl.value === unit.unitTo) {
        const operation = operationMappings[unit.operation];
        if (operation) {
          this.convertedQty = operation(this.TotalQty, unit.conversionFactor);
          this.convertedQty = +this.convertedQty.toFixed(2); 
        }
      } 
      });
    }
    if(unitTypeControl && unitTypeControl.value){
    this.selectedUnit = unitTypeControl.value; 
    } 
  }
  
  
  onChkOrderSensitive() {
    this.orderSensivityList;
    if (this.chkOrderSensitive) {
      this.chkColorSensitive = false;
      this.chkSizeSensitive = false;
      this.chkColorWiseSizeSensitive = false;
    }
  }
  
  onChkColorSensitive() {
    if (this.chkColorSensitive) {
      this.chkOrderSensitive = false;
      this.chkSizeSensitive = false;
      this.chkColorWiseSizeSensitive = false;
    }
  }

  onChkSizeSensitive() {
    if (this.chkSizeSensitive) {
      this.chkOrderSensitive = false;
      this.chkColorSensitive = false;
      this.chkColorWiseSizeSensitive = false;
    }
    
  }

  onChkColorWiseSizeSensitive() {
    if (this.chkColorWiseSizeSensitive) {
      this.chkOrderSensitive = false;
      this.chkColorSensitive = false;
      this.chkSizeSensitive = false;
    }
  }

  saveAccessoriesBooking(){
    debugger
    if(this.chkOrderSensitive){
      this.orderSensivityList;
      var listForSave = getOrderSensitiveListForSave(this.orderSensivityList,this.initialOrderId,this.buyerName,this.styleNo,
        this.AccessoriesName,this.supplierName,this.TotalQty,this.TotalOrderValue,this.ItemUnit,this.selectedUnit,this.convertedQty);
        this.accessoriesBookingService.createAccessoriesListForSave(listForSave);
    }
    if(this.chkColorSensitive){
      this.colorSensitiveList;
      var listForSave = getColorSensitiveListForSave(this.colorSensitiveList,this.initialOrderId,this.buyerName,this.styleNo,
        this.AccessoriesName,this.supplierName,this.TotalQty,this.TotalOrderValue,this.ItemUnit,this.selectedUnit,this.convertedQty);
        this.accessoriesBookingService.createAccessoriesListForSave(listForSave);
    }
    if(this.chkSizeSensitive){
      this.sizeSensitiveList;
      var listForSave = getSizeSensitiveListForSave(this.sizeSensitiveList,this.initialOrderId,this.buyerName,this.styleNo,
        this.AccessoriesName,this.supplierName,this.TotalQty,this.TotalOrderValue,this.ItemUnit,this.selectedUnit,this.convertedQty);
        this.accessoriesBookingService.createAccessoriesListForSave(listForSave);
    }
    if(this.chkColorWiseSizeSensitive){
      var colorSizeSensitiveList = getcolorSizeSensitiveList(this.colorWiseBookingList,this.sizesList);
      var listForSave = getColorSizeSensitiveListForSave(colorSizeSensitiveList,this.initialOrderId,this.buyerName,this.styleNo,
        this.AccessoriesName,this.supplierName,this.TotalQty,this.TotalOrderValue,this.ItemUnit,this.selectedUnit,this.convertedQty);
        this.accessoriesBookingService.createAccessoriesListForSave(listForSave);
    }
  }
}

function createTableColorWiseSizeSensitive(sizesList: any, displayedColumns: any) {
  displayedColumns = ['color'];
  const uniquesizes = sizesList.map((list: { sizes: any; }) => list.sizes);
  const dynamicColumns = displayedColumns.concat(uniquesizes);
  return dynamicColumns;
}
function getColorWiseBookingList(allColorList: any, sizeList: any) {
  const ColorWiseBookingList: any = [];
  allColorList.forEach((color: any) => {
    const ColorWiseBooking = {
      color: color.color,
      ...generateSizeProperties(sizeList)
    };
    ColorWiseBookingList.push(ColorWiseBooking);
  });
  //var uniqueColor = removeDuplicateItems(ColorWiseBookingList);
  return ColorWiseBookingList;
}
function generateSizeProperties(sizeList: any[]) {
  const sizeProperties: any = {};
  sizeList.forEach((size) => {
    sizeProperties[size.sizes] = "";
  });
  return sizeProperties;

}
function removeDuplicateItems(menuInfo:any){
  var uniqueMenuInfo = menuInfo.reduce((accumulator:any, current:any) => {
    if (!accumulator.some((item: { color: any; }) => item.color === current.color)) {
      accumulator.push(current);
    }
    return accumulator;
  }, []);
  return uniqueMenuInfo;
}
function  getCalculateTotalPriceSumColor(colorSensivityList:any) {
  var sum = 0; 
  colorSensivityList.forEach((element: { [x: string]: any; }) => {
    Object.keys(element).forEach(key => {
      if (key == "totalPrice") {
        sum += element[key] || 0;
      }
    });
  });
  return sum;
}
function  getCalculateTotalPriceSumSize(sizeSensivityList:any) {
  var sum = 0; 
  sizeSensivityList.forEach((element: { [x: string]: any; }) => {
    Object.keys(element).forEach(key => {
      if (key == "totalPrice") {
        sum += element[key] || 0;
      }
    });
  });
  return sum;
}
function  getCalculateTotalPriceSumColorSize(colorSizeSensivityList:any) {
  var sum = 0; 
  colorSizeSensivityList.forEach((element: { [x: string]: any; }) => {
    Object.keys(element).forEach(key => {
      if (key.endsWith('totalprice')) {
        sum += element[key] || 0;
      }
    });
  });
  return sum;
}
function getdropdownList(unitConversionList:any, ItemUnit:any) {
  const filteredUnits = unitConversionList
    .filter((unit: { unitFrom: any; }) => ItemUnit === unit.unitFrom)
    .map((unit: { unitTo: any; }) => unit.unitTo);
  return filteredUnits;
}
function preparecolorSensitiveList(uniqueColorList: any) {
  const colorSensitiveList: any = [];
  uniqueColorList.forEach((Item: any) => {
    const ColorWiseBooking = {
      color: Item.color,
      rate: '',
      accessoriersQty: '',
      totalPrice: '',
    };
    colorSensitiveList.push(ColorWiseBooking);
  });
  return colorSensitiveList;
}
function preparesizeSensitiveList(sizesList: any) {
  const sizeSensitiveList: any = [];
  sizesList.forEach((Item: any) => {
    const sizeWiseBooking = {
      size: Item.sizes,
      rate: '',
      accessoriersQty: '',
      totalPrice: '',
    };
    sizeSensitiveList.push(sizeWiseBooking);
  });
  return sizeSensitiveList;
}
interface ColorWiseBooking {
  [key: string]: any;
  color: string;
}

function getcolorSizeSensitiveList(
  colorWiseBookingList: ColorWiseBooking[],
  sizesList: { sizes: string }[]
): { [key: string]: any }[] {
  const newArray = colorWiseBookingList.flatMap((booking) => {
    return sizesList.map(({ sizes }) => ({
      color: booking['color'],
      size: sizes,
      rate: booking[sizes],
      accessoriersQty: booking[sizes + 'accessoriersQty'] ?? '',
      totalPrice: booking[sizes + 'totalprice'] ?? '',
    }));
  });
  return newArray;
}
 function getOrderSensitiveListForSave(orderSensivityList:any,initialOrderId:any,buyerName:any,styleNo:any,AccessoriesName:any,
  supplierName:any,TotalQty:any,TotalOrderValue:any,ItemUnit:any,selectedUnit:any,convertedQty:any){
    debugger
  var newArray: any =[];
  orderSensivityList.forEach((item:any) => {
    var obj = {
      "id": 0,
      "initialOrderId": initialOrderId,
      "buyerName": buyerName,
      "styleNo": styleNo,
      "supplierName": supplierName,
      "accessoriesName": AccessoriesName,
      "totalAccessoriesQty": Number(TotalQty),
      "convertedAccessoriesQty": Number(convertedQty),
      "purchasedAccessoriesQty": Number(item.accessoriersQty),
      "accessoriesUnit": ItemUnit,
      "convertedUnit": selectedUnit,
      "supplierRate": Number(item.rate),
      "totalAccessoriesCost": Number(TotalOrderValue),
      "purchasedAccessoriesCost": Number((item.totalPrice).toFixed(3)),
      "sensitivity": "order",
      "entryUser": "",
      "userCode": "",
      "stateStatus": "Pending",
    }
    newArray.push(obj);
  });
  
  return newArray; 
}
function getColorSensitiveListForSave(colorSensitiveList:any,initialOrderId:any,buyerName:any,styleNo:any,AccessoriesName:any,
  supplierName:any,TotalQty:any,TotalOrderValue:any,ItemUnit:any,selectedUnit:any,convertedQty:any){
    debugger
  var newArray: any =[];
  colorSensitiveList.forEach((item:any) => {
    if(item.totalPrice){
    var obj = {
      "id": 0,
      "initialOrderId": initialOrderId,
      "buyerName": buyerName,
      "styleNo": styleNo,
      "supplierName": supplierName,
      "accessoriesName": AccessoriesName,
      "totalAccessoriesQty": Number(TotalQty),
      "convertedAccessoriesQty": Number(convertedQty),
      "purchasedAccessoriesQty": Number(item.accessoriersQty),
      "garmentsColor": item.color,
      "accessoriesUnit": ItemUnit,
      "convertedUnit": selectedUnit,
      "supplierRate": Number(item.rate),
      "totalAccessoriesCost": Number(TotalOrderValue),
      "purchasedAccessoriesCost": Number((item.totalPrice).toFixed(3)),
      "sensitivity": "color",
      "entryUser": "",
      "userCode": "",
      "stateStatus": "Pending",
    }
    newArray.push(obj);
  }
  });
  
  return newArray; 
}
function getSizeSensitiveListForSave(sizeSensitiveList:any,initialOrderId:any,buyerName:any,styleNo:any,AccessoriesName:any,
  supplierName:any,TotalQty:any,TotalOrderValue:any,ItemUnit:any,selectedUnit:any,convertedQty:any){
    debugger
  var newArray: any =[];
  sizeSensitiveList.forEach((item:any) => {
    if(item.totalPrice){
    var obj = {
      "id": 0,
      "initialOrderId": initialOrderId,
      "buyerName": buyerName,
      "styleNo": styleNo,
      "supplierName": supplierName,
      "accessoriesName": AccessoriesName,
      "totalAccessoriesQty": Number(TotalQty),
      "convertedAccessoriesQty": Number(convertedQty),
      "purchasedAccessoriesQty": Number(item.accessoriersQty),
      "garmentsSize": item.size,
      "accessoriesUnit": ItemUnit,
      "convertedUnit": selectedUnit,
      "supplierRate": Number(item.rate),
      "totalAccessoriesCost": Number(TotalOrderValue),
      "purchasedAccessoriesCost": Number((item.totalPrice).toFixed(3)),
      "sensitivity": "size",
      "entryUser": "",
      "userCode": "",
      "stateStatus": "Pending",
    }
    newArray.push(obj);
  }
  });
  
  return newArray; 
}
function getColorSizeSensitiveListForSave(colorSizeSensitiveList:any,initialOrderId:any,buyerName:any,styleNo:any,AccessoriesName:any,
  supplierName:any,TotalQty:any,TotalOrderValue:any,ItemUnit:any,selectedUnit:any,convertedQty:any){
    debugger
  var newArray: any =[];
  colorSizeSensitiveList.forEach((item:any) => {
    if(item.totalPrice){
    var obj = {
      "id": 0,
      "initialOrderId": initialOrderId,
      "buyerName": buyerName,
      "styleNo": styleNo,
      "supplierName": supplierName,
      "accessoriesName": AccessoriesName,
      "totalAccessoriesQty": Number(TotalQty),
      "convertedAccessoriesQty": Number(convertedQty),
      "purchasedAccessoriesQty": Number(item.accessoriersQty),
      "garmentsColor": item.color,
      "garmentsSize": item.size,
      "accessoriesUnit": ItemUnit,
      "convertedUnit": selectedUnit,
      "supplierRate": Number(item.rate),
      "totalAccessoriesCost": Number(TotalOrderValue),
      "purchasedAccessoriesCost": Number((item.totalPrice).toFixed(3)),
      "sensitivity": "colorSize",
      "entryUser": "",
      "userCode": "",
      "stateStatus": "Pending",
    }
    newArray.push(obj);
  }
  });
  
  return newArray; 
}








