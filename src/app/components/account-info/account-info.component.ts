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

  Obj: any = {
    accountInfoList: [

      {
        userName: "",
        accountNumber: "",
        accountType: "",
        // balance: "",
        // dateOpened: "",
        // status: "",
        // overDraftLimit: "",
        // interestRate: "",
        // lastTransactionDate: "",
        // branchName: "",
      }
    ],
  }

  constructor(private router: Router, private route: ActivatedRoute, private dialog: MatDialog, private accountInfoService: AccountInfoService) { }

  ngOnInit(): void {
  }

}
