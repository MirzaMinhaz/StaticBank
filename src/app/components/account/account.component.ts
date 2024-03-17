import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { TransactionService } from 'src/app/services/transaction.service';
import { Observable, map, startWith } from 'rxjs';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  parameterObj: any = {
    accountList : [
      {
        accountNumber: '',
        userName: '',
        accountType: '',
        balance: '',
        status: '',
        overDraftLimit: '',
        lastTransactionDate: '',
        branchName: '',
      }
    ],
  }

  dataSource: any;
  PoList: any;
  allPiList: any;
  filteredPONo: any;
  allBranchNameList: any;
  AccountStatusList: any;
  allUserNameList: any;
  allAccountTypeList: any;

  constructor(private transactionService: TransactionService) { }

  async ngOnInit(): Promise<void> {
    debugger
    var branchData = await this.transactionService.getBranchDetails().toPromise();
    this.allBranchNameList = new Set(branchData.map((obj: { branchName: any; }) => obj.branchName));

    var userData = await this.transactionService.getUserDetails().toPromise();
    this.allUserNameList = new Set(userData.map((obj: { firstName: any; }) => obj.firstName)); //getAccountTypeDetails

    var accountTypeData = await this.transactionService.getAccountTypeDetails().toPromise();
    this.allAccountTypeList = new Set(accountTypeData.map((obj: { typeName: any; }) => obj.typeName));
    
    this.AccountStatusList = this.transactionService.getAccountStatus();

  }


  async onPiSelected() {
    debugger
    const selectedPiNumber = this.parameterObj.sprReceiveList[0].piNo;
    //var sprPidata = await this.requisitionEntryService.getReceiveInfoByPINo(selectedPiNumber).toPromise();
    // this.dataSource = sprPidata;
    // this.parameterObj.sprReceiveList[0].poNo = sprPidata[0].poNo;
    // this.parameterObj.sprReceiveList[0].supplierName = sprPidata[0].supplierName;

    // var suppCode = sprPidata[0].supplierCode;
    // var supplierInfo = await this.commonService.getSupplierBySupplierCode(suppCode).toPromise();
    // this.parameterObj.sprReceiveList[0].officeAddress = supplierInfo[0].officeAddress;
  }


  async saveSPRProformaInvoice() {
    var SPRReceiveList = prepareSaveableData(this.dataSource, this.parameterObj.sprReceiveList[0].piNo, this.parameterObj.sprReceiveList[0].challanNo);
    //await this.requisitionEntryService.saveSPRReceiveInfo(SPRReceiveList).toPromise();
    //this.commonService.callPopupCommon(5, "Data Successfully Saved!!");
    //location.reload();

  }

  public twoDigitYearMax = 30;
  public fullFormat = "dd-MMM-yyyy";

  public min = new Date(1931, 0, 1);
  public max = new Date(2030, 11, 31);

}


function prepareSaveableData(dataSource: any, piNo: any, challanNo: any) {
  debugger
  var saveableData: any = [];
  
  dataSource.forEach((item: any) => {
      var obj = {
        "poNo": "",
        "piNo": "",
        "ilCode": "",
        "poType": "SPR",
        "challanNo": "",
        "receivedQty": 0,
        "comments": "",
      };
      obj.poNo = item.poNo;
      obj.piNo = piNo;
      obj.ilCode = item.ilCode;
      obj.challanNo = challanNo;
      obj.receivedQty = item.receivedQty;
      obj.comments = item.comments;
      saveableData.push(obj);
  });
  
  return saveableData;
}
