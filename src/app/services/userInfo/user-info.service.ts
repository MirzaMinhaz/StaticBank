import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserInfo } from 'src/app/models/user-info/user-info';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(private http: HttpClient) { }


  public createUserInfo( userInfo: UserInfo):void{
    debugger
     this.http.post(`${environment.apiUrl}/UserInfoes`,userInfo).subscribe((result)=>{
      console.log(result);
    });
  }


  public getUserInfo ():Observable<string>{
    return this.http.get<string>(`${environment.apiUrl}/UserInfos`);
  }

  public getBloodGroupList() : any{
    let BloodGroupList = [
      {BloodGroup : "AB+"},
      {BloodGroup : "AB-"},
      {BloodGroup : "B+"},
      {BloodGroup : "B-"},
      {BloodGroup : "O+"},
      {BloodGroup : "O-"},
      {BloodGroup : "A+"},
      {BloodGroup : "A-"}
    ];
    return BloodGroupList;
  }

  public getReligionList() : any{
    let ReligionList = [
      {Religion : "Islam"},
      {Religion : "Hindu"},
      {Religion : "Christian"},
      {Religion : "Buddhist"},
      {Religion : "Tribal"}
    ];
    return ReligionList;
  }

  public getMaritalStatusList() : any{
    let MaritalStatusList = [
      {MaritalStatus : "Single"},
      {MaritalStatus : "Married"}
    ];
    return MaritalStatusList;
  }

}
