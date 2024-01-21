import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AccountInfoService } from 'src/app/services/accountInfo/account-info.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {
  firstName: any;
  accountNumber: any;
  accountType: any;
  itemName: any;
  balance: any;
  dateOpened: any;
  status: any;
  overDraftLimit: any;
  interestRate: any;
  lastTransactionDate: any;
  branchName: any;
  comments: any;

  accountInfoEntry = {
    firstName: "",
    accountNumber: "",
    accountType: "",
    itemName: "",
    balance: "",
    dateOpened: new Date(),
    status: "",
    overDraftLimit: "",
    interestRate: "",
    lastTransactionDate: "",
    branchName: "",
    comments: "",
  }
  accTypeList: any;
  allAccTypeList: any;
  AccountStatusList: any;
  brhNameList: any;
  allBranchNameList: any;
  userNameList: any;
  allUserNameList: any;

  constructor(private router: Router, private route: ActivatedRoute, private dialog: MatDialog, private accountInfoService: AccountInfoService) { }

  ngOnInit(): void {

    debugger

    this.accountInfoService.getAccountType().subscribe((accType: any) => {

      this.accTypeList = accType;
      this.allAccTypeList = new Set(this.accTypeList.map((obj: { typeName: any; }) => obj.typeName));

    });

    this.accountInfoService.getBranchNames().subscribe((brhName: any) => {

      this.brhNameList = brhName;
      this.allBranchNameList = new Set(this.brhNameList.map((obj: { branchName: any; }) => obj.branchName));

    });

    this.accountInfoService.getUserName().subscribe((userNames: any) => {
      debugger
      this.userNameList = userNames;
      this.allUserNameList = new Set(this.userNameList.map((obj: { firstName: any; }) => obj.firstName));

    });

    this.AccountStatusList = this.accountInfoService.getAccountStatus();


  }

  async saveAccountInformation() {
    debugger
    var AccountInfoList = prepareAccountInfo(this.accountInfoEntry);
    await this.accountInfoService.saveAccountInfo(AccountInfoList);

  }


  public twoDigitYearMax = 30;
  public fullFormat = "dd-MMM-yyyy";

  public min = new Date(1931, 0, 1);
  public max = new Date(2030, 11, 31);
}






function prepareAccountInfo(accountInfoEntry: any) {
  debugger
  var newArray: any = [];

  var obj = {
    "accountId": 0,
    "userId": 0,
    "accountNumber": accountInfoEntry.accountNumber,
    "accountType": accountInfoEntry.accountType,
    "balance": accountInfoEntry.balance,
    "dateOpened": accountInfoEntry.dateOpened,
    "status": accountInfoEntry.status,
    "overdraftLimit": accountInfoEntry.overDraftLimit,
    "interestRate": accountInfoEntry.interestRate,
    "lastTransactionDate": accountInfoEntry.lastTransactionDate,
    "branchId": "",
    "comments": accountInfoEntry.comments

  };
  newArray.push(obj);



  return newArray;
}
