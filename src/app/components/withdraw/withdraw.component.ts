import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent {

  CRMSupportForm: FormGroup;
  submitted = false;
  crmSupportList: any;
  issueCategoryList :any;
  IssueStatusList:any;
  CategoryList: any;
  TaskAssignedToList: any;
  PriorityList:any;
  //issueCategory: string ;
  issueInfo: any;


  crmSupport = {
    issueName : "",
    //issueCategory: "",
    categoryId: "",
    issueStatus: "",
    issuePriority: "",
    issueResolution: "",
    description :"",
    issueDate: Date,
    requestedBy:"",
    requestedPhone:"",
    requestedEmail:"",
    taskAssignedTo:"",
    assignedDate: Date,
    completedDate: null as Date | null,
  }

  
  

  constructor(public formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private dialog: MatDialog, private commonService: CommonService, private crmSupportService: CrmSupportService) { }

  ngOnInit(): void {
    this.CRMSupportForm = this.formBuilder.group({
      issueName: ['', Validators.required],
      issueCategory: ['', Validators.required],
      issueStatus: ['', Validators.required],
      issuePriority: ['', Validators.required],
      issueResolution: ['', Validators.required],
      description: ['', Validators.required],
      issueDate: ['', Validators.required],
      requestedBy: ['', Validators.required],
      requestedPhone: ['', Validators.required],
      requestedEmail: ['', Validators.required],
      taskAssignedTo: ['', Validators.required],
      assignedDate: ['', Validators.required],
  });

  this.crmSupportService.getIssueCategory ().subscribe((issueCategory:string)=>{
    //debugger
    this.issueCategoryList = issueCategory;
  });
  this.TaskAssignedToList = this.crmSupportService.getTaskAssignedToList();
  this.IssueStatusList = this.crmSupportService.getIssueStatusList();
  this.PriorityList = this.crmSupportService.getPriorityList();
  this.CategoryList = this.crmSupportService.getIssueCategoryById();

  

  this.route.queryParams.subscribe(params => {
    //debugger
    var parameter = params['param'];
    this.crmSupportService.getIssueById(parameter).subscribe((list: any) => {
      this.issueInfo = list;
      debugger
      this.issueInfo.forEach((item:any) => {

        this.crmSupport.issueName  = item.issueName;
        this.crmSupport.description= item.description;
        this.crmSupport.issueDate = item.issueDate.split("T");
         this.crmSupport.requestedBy = item.requestedBy;
         this.crmSupport.requestedPhone = item.requestedPhone;
         this.crmSupport.requestedEmail = item.requestedEmail;
         this.crmSupport.taskAssignedTo = item.taskAssignedTo;
         this.crmSupport.assignedDate = item.assignedDate.split("T");
         //this.crmSupport.issueCategory = item.issueCategory[0];
         this.crmSupport.issueStatus = item.issueStatus;
         this.crmSupport.issuePriority = item.issuePriority;
         this.crmSupport.issueResolution = item.issueResolution;
      });
    });
  });
}


  get f() { return this.CRMSupportForm.controls; }

  onCategorySelected($event: any) {
    //debugger
    const categoryName = $event;
    
    this.issueCategoryList.forEach((item : any) => {

      if(categoryName == item.categoryName){
        this.crmSupport.categoryId = item.categoryId;
      }

    });
    

  }
  
  ListOfArray : string[] = [];
addNewSupport() {
    //debugger
     let newUsersArray = this.ListOfArray;
     const newObj = { ...this.crmSupport };
      //newUsersArray.unshift(newObj);
      this.ListOfArray = [...newUsersArray] 
      //this.ListOfArray.push(newObj);
}
      

  async saveCRMSupport(){
    debugger
    //var crmSupportList = prepareCRMSupportModel(this.crmSupport);

    if (this.crmSupport.issueStatus === "Completed") {
      this.crmSupport.completedDate = new Date();
    }
     
      await this.crmSupportService.createCRMSupport(this.crmSupport); 

      // Reset the form after saving
  this.CRMSupportForm.reset();

  // You might also want to reset the crmSupport object if needed
  this.crmSupport = {
    issueName: "",
    categoryId: "",
    issueStatus: "",
    issuePriority: "",
    issueResolution: "",
    description: "",
    issueDate: Date,
    requestedBy: "",
    requestedPhone: "",
    requestedEmail: "",
    taskAssignedTo: "",
    assignedDate: Date,
    completedDate: null as Date | null,
  };
    
  }
  public twoDigitYearMax = 30;
  public fullFormat = "dd-MMM-yyyy";

  public min = new Date(1931, 0, 1);
  public max = new Date(2030, 11, 31);

}

}
