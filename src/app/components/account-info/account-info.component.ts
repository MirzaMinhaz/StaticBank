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
  userName: any;
  accountNumber: any;
  accountType: any;
  itemName: any;
  balance: any;
  dateOpened: any;

  Obj: any = {
    accountInfoList: [

      {
        userName: "",
        accountNumber: "",
        accountType: "",
        itemName: "",
        balance: "",
        dateOpened: "",
        // status: "",
        // overDraftLimit: "",
        // interestRate: "",
        // lastTransactionDate: "",
        // branchName: "",
      }
    ],
  }
  accTypeList: any;
  allAccTypeList: any;

  constructor(private router: Router, private route: ActivatedRoute, private dialog: MatDialog, private accountInfoService: AccountInfoService) { }

  ngOnInit(): void {

    this.accountInfoService.getAccountType().subscribe((accType: any) => {

      this.accTypeList = accType;
      this.allAccTypeList = new Set(this.accTypeList.map((obj: { typeName: any; }) => obj.typeName));

      this.BloodGroupList = this.userInfoService.getBloodGroupList();


    });


  }

}
