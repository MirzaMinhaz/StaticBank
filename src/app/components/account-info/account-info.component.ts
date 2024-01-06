import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AccountInfoService } from 'src/app/services/accountinfo/account-info.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {
  userName: any;
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

  Obj: any = {
    accountInfoList: [

      {
        userName: "",
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
    ],
  }
  accTypeList: any;
  allAccTypeList: any;
  AccountStatusList: any;
  brhNameList: any;
  allBranchNameList: any;

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

    this.AccountStatusList = this.accountInfoService.getAccountStatus();


  }

  public twoDigitYearMax = 30;
  public fullFormat = "dd-MMM-yyyy";

  public min = new Date(1931, 0, 1);
  public max = new Date(2030, 11, 31);

}
