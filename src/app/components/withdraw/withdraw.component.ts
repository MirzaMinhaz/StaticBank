// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MatDialog } from '@angular/material/dialog';
// import { Router } from '@angular/router';
// import { MatTableDataSource } from '@angular/material/table';
// import { ActivatedRoute } from '@angular/router';
// import { MatSnackBar } from '@angular/material/snack-bar';

// @Component({
//   selector: 'app-withdraw',
//   templateUrl: './withdraw.component.html',
//   styleUrls: ['./withdraw.component.scss']
// })
// export class WithdrawComponent {

//   userInfo: UserInfo;
//   UserInfoForm: FormGroup;
//   displayedColumns: string[] = ['firstName', 'lastName', 'gender', 'mobileNo', 'address', 'city',
//     'state',
//     'postalCode',
//     'country',
//     'email',
//     'dateOfBirth',
//     'bloodGroup',
//     'religion',
//     'maritalStatus',
//     'registrationDate',
//     'userRole',
//     'status',
//     'comments'
//   ];

//   // withdraw = {
//   //   userId : "",
//   //   userName: "",
//   //   accountId: "",
//   //   withdrawalAmount: "",
//   //   withdrawalMethod: "",
//   //   withdrawalBranch :"",
//   //   withdrawalDate: Date,
//   // }

//   BloodGroupList: any;
//   ReligionList: any;
//   MaritalStatusList: any;
//   data: any;
//   submitted = false;


//   userInfoList: any;
//   dataSource: MatTableDataSource<any>;
//   infoList: any;
//   rowCount: number = 0;
//   StatusList: any;
//   GenderList: any;
//   UserRoleList: any;
//   DivisionList: any;
//   CityList: any;
//   CountryList: any;
//   Division: string[] = [];
//   Cities: string[] = [];
//   divisionList: any;

  



//   //get f() { return this.ActionTokenList; }
//   get f() { return this.UserInfoForm.controls; }


//   constructor(public formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private dialog: MatDialog, private userInfoService: UserInfoService) {
//     this.userInfoList = new MatTableDataSource(this.data);

//     this.divisionList = this.userInfoService.getDivisionList();

    



//     this.userInfo = {
//       firstName: "",
//       lastName: "",
//       gender: "",
//       mobileNo: "",
//       address: "",
//       city: "",
//       state: "",
//       postalCode: "",
//       country: "",
//       email: "",
//       dateOfBirth: new Date(),
//       bloodGroup: "",
//       religion: "",
//       maritalStatus: "",
//       registrationDate: new Date(),
//       userRole: "",
//       status: "",
//       comments: ""
//     }

//     this.UserInfoForm = this.formBuilder.group({

//       firstName: ['', Validators.required],
//       lastName: ['', Validators.required],
//       gender: ['', Validators.required],
//       mobileNo: ['', Validators.required],
//       address: ['', Validators.required],
//       city: ['', Validators.required],
//       state: ['', Validators.required],
//       postalCode: ['', Validators.required],
//       country: ['', Validators.required],
//       email: ['', Validators.required],
//       dateOfBirth: ['', Validators.required],
//       bloodGroup: ['', Validators.required],
//       division: ['', Validators.required],
//       religion: ['', Validators.required],
//       maritalStatus: ['', Validators.required],
//       registrationDate: ['', Validators.required],
//       userRole: ['', Validators.required],
//       status: ['', Validators.required],
//       comments: ['', Validators.required],
//     });


//     this.dataSource = new MatTableDataSource<any>([]);

//   }

//   ngOnInit(): void {

//     this.userInfoService.getUserInfo().subscribe((info: string) => {
//       this.infoList = info;

//       this.initializeTable();


//       this.infoList.forEach((item: any) => {
//         item.dateOfBirth = item.dateOfBirth.split("T")[0];
//       });

//       this.userInfoList.data = this.infoList;

//       this.rowCount = this.userInfoList.data.length;

//     });





//     this.BloodGroupList = this.userInfoService.getBloodGroupList();
//     this.ReligionList = this.userInfoService.getReligionList();
//     this.MaritalStatusList = this.userInfoService.getMaritalStatus();
//     this.DivisionList = this.userInfoService.getDivisionList();
//    // this.CityList = this.userInfoService.getCityList();
//     this.CountryList = this.userInfoService.getCountryList();
//     this.GenderList = this.userInfoService.getGenderList();
//     this.UserRoleList = this.userInfoService.getUserRoleList();
//     this.StatusList = this.userInfoService.getStatusList();

//     interface Division {
      
//     }


//   }

//   filteredCityList: string[] = [];

  


//   onDivisionChange() {
//     const selectedDivision = this.userInfo.state;
//     this.filteredCityList = this.userInfoService.getCityListByDivision(selectedDivision);
//   }



//   onSubmit() {
//     debugger

//     this.userInfoService.createUserInfo(this.userInfo);

//     this.submitted = true;

//     this.UserInfoForm.reset();
//   }

//   initializeTable() {
//     const dataSource = new MatTableDataSource(this.infoList);
//     //dataSource.paginator = this.paginator;
//     this.dataSource = dataSource;
//     this.rowCount = this.userInfoList.data.length;
//   }


//   public twoDigitYearMax = 30;
//   public fullFormat = "dd-MMM-yyyy";

//   public min = new Date(1931, 0, 1);
//   public max = new Date(2030, 11, 31);

// }

