import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AccountInfoService } from 'src/app/services/accountinfo/account-info.service';
//import { AccountInfo } from 'src/app/models/accountInfo/accountInfo';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {
  AccountInfoForm!: FormGroup;
  accTypeList: any;
  allAccTypeList: any;
  AccountStatusList: any;
  brhNameList: any;
  allBranchNameList: any;
  userNameList: any;
  allUserNameList: any;

  accountInfoEntry = {
    accountId: 0,
    userId: 0,
    firstName: "",
    accountNumber: "",
    accountType: "",
    balance: "",
    dateOpened: new Date(), // Initialize with a default date, or any other default value
    status: "",
    overDraftLimit: "",
    interestRate: "",
    lastTransactionDate: "",
    branchId: 0,
    branchName: "",
    comments: ""
  }


  get f() { return this.AccountInfoForm.controls; }

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private dialog: MatDialog, private accountInfoService: AccountInfoService) { }

  ngOnInit(): void {

    this.AccountInfoForm = this.formBuilder.group({

      accountId: ['', Validators.required],
      userId: ['', Validators.required],
      accountNumber: ['', Validators.required],
      accountType: ['', Validators.required],
      balance: ['', Validators.required],
      dateOpened: ['', Validators.required],
      status: ['', Validators.required],
      overdraftLimit: ['', Validators.required],
      interestRate: ['', Validators.required],
      lastTransactionDate: ['', Validators.required],
      branchId: ['', Validators.required],
      comments: ['', Validators.required],
    });


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


  public twoDigitYearMax = 30;
  public fullFormat = "dd-MMM-yyyy";

  public min = new Date(1931, 0, 1);
  public max = new Date(2030, 11, 31);



  async saveAccountInformation() {
    debugger

    await this.accountInfoService.saveAccountInfo(this.accountInfoEntry);
    this.AccountInfoForm.reset();
  }

}

