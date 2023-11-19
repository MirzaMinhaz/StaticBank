import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserInfoService } from 'src/app/services/userInfo/user-info.service';
import { UserInfo } from 'src/app/models/user-info/user-info';
import { DatePickerModule } from '@progress/kendo-angular-dateinputs';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  userInfo: UserInfo;
  UserInfoForm: FormGroup;
  displayedColumns: string[] = ['name', 'address', 'mobileNo', 'email', 'dateOfBirth', 'bloodGroup', 'religion', 'maritalStatus'];

  BloodGroupList: any;
  ReligionList: any;
  MaritalStatusList: any;
  data: any;
  submitted = false;


  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  ActionTokenList: any;
  userInfoList: any;
  dataSource: MatTableDataSource<any>;
  infoList: any;
  rowCount: number = 0;
  StatusList: any;
  GenderList: any;
  UserRoleList: any;
  DivisionList: any;


  
  //get f() { return this.ActionTokenList; }
  get f() { return this.UserInfoForm.controls; }


  constructor(public formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private dialog: MatDialog, private userInfoService: UserInfoService) {
    this.userInfoList = new MatTableDataSource(this.data);

    this.dataSource = new MatTableDataSource<any>([]);
  
    this.userInfo = {
      name : "",
      address: "",
      mobileNo: "",
      email: "",
      dateOfBirth: new Date(),
      bloodGroup :"",
      religion:"",
      maritalStatus:"",
    }

    this.UserInfoForm = this.formBuilder.group({

      name: ['', Validators.required],
      address: ['', Validators.required],
      mobileNo: ['', Validators.required],
      email: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      bloodGroup: ['', Validators.required],
      religion: ['', Validators.required],
      maritalStatus: ['', Validators.required],
  });
  
  }

  ngOnInit(): void {  

    this.userInfoService.getUserInfo().subscribe((info: string) => {
      this.infoList = info;

      this.initializeTable();


      this.infoList.forEach((item:any) => {
        item.dateOfBirth  = item.dateOfBirth .split("T")[0];
    });

    this.userInfoList.data = this.infoList;

    this.rowCount = this.userInfoList.data.length;

  });

    



    this.BloodGroupList = this.userInfoService.getBloodGroupList();
    this.ReligionList = this.userInfoService.getReligionList();
    this.DivisionList = this.userInfoService.getDivisionList();
    this.GenderList = this.userInfoService.getGenderList();
    this.UserRoleList = this.userInfoService.getUserRoleList();
    this.StatusList = this.userInfoService.getStatusList();

  
}

  

  onSubmit() {
    debugger
    
    this.userInfoService.createUserInfo(this.userInfo);
    
     this.submitted = true;

     this.UserInfoForm.reset();
  }

  initializeTable() {
    const dataSource = new MatTableDataSource(this.infoList);
    //dataSource.paginator = this.paginator;
    this.dataSource = dataSource;
    this.rowCount = this.userInfoList.data.length;
  }


  public twoDigitYearMax = 30;
  public fullFormat = "dd-MMM-yyyy";

  public min = new Date(1931, 0, 1);
  public max = new Date(2030, 11, 31);

}

