import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountInfoService {

  constructor(private http: HttpClient) { }

  public getUserName(): Observable<string> {
    return this.http.get<string>(`${environment.apiUrl}/TblUserInfos/getUserName`);
  }

  public getAccountType(): Observable<string> {
    return this.http.get<string>(`${environment.apiUrl}/TblAccountTypes/getAccountType`);
  }

  public getBranchNames(): Observable<string> {
    return this.http.get<string>(`${environment.apiUrl}/TblBranches/getBranchNames`);
  }


  public getAccountStatus() : any{
    let AccountStatusList = [
      {Status : "Active"},
      {Status : "InActive"}
    ];
    return AccountStatusList;
  }


  public saveAccountInfo(AccountInfoList:any): Observable<any> {
   debugger
    return this.http.post(`${environment.apiUrl}/TblAccounts`,AccountInfoList);
  }

  // public saveAccountInfo( accountInfoEntry: any):void{
  //  debugger
  //   this.http.post(`${environment.apiUrl}/TblAccounts`,accountInfoEntry).subscribe((result)=>{
  //    console.log(result);
  //  });
 }

