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



  async saveSPRProformaInvoice() {
    debugger
    var SPRReceiveList = prepareSaveableData(this.parameterObj.accountList[0].accountNumber,this.parameterObj.accountList[0].userName,this.parameterObj.accountList[0].accountType,this.parameterObj.accountList[0].balance,this.parameterObj.accountList[0].status,this.parameterObj.accountList[0].overDraftLimit,this.parameterObj.accountList[0].lastTransactionDate,this.parameterObj.accountList[0].branchName);
    //await this.requisitionEntryService.saveSPRReceiveInfo(SPRReceiveList).toPromise();
    //this.commonService.callPopupCommon(5, "Data Successfully Saved!!");
    //location.reload();
  }

  public twoDigitYearMax = 30;
  public fullFormat = "dd-MMM-yyyy";

  public min = new Date(1931, 0, 1);
  public max = new Date(2030, 11, 31);

}


function prepareSaveableData(accountNumber: any, userName: any, accountType: any, balance: any, status: any, overDraftLimit: any, lastTransactionDate: any, branchName: any) {
  debugger
  var saveableData: any = [];
      var obj = {
        "accountNumber": "",
        "userName": "",
        "accountType": "",
        "balance": "0",
        "status": "",
        "overDraftLimit": 0,
        "lastTransactionDate": "",
        "branchName": "",
      };
      obj.accountNumber = accountNumber;
      obj.userName = userName;
      obj.accountType = accountType;
      obj.balance = balance;
      obj.status = status;
      obj.overDraftLimit = overDraftLimit;
      obj.lastTransactionDate = lastTransactionDate;
      obj.branchName = branchName;
      saveableData.push(obj);
  
  return saveableData;
}
