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
    this.http.post(`${environment.apiUrl}/TblUserInfos`, userInfo).subscribe((result) => {
      console.log(result);
    });
      
  }


  public getUserInfo ():Observable<string>{
    return this.http.get<string>(`${environment.apiUrl}/TblUserInfos`);
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

  public getGenderList() : any{
    let GenderList = [
      {Gender : "Male"},
      {Gender : "Female"}
    ];
    return GenderList;
  }

  public getDivisionList() : any{
    let DivisionList = [
      {Division : "Dhaka"},
      {Division : "Chittagong"},
      {Division : "Rajshahi"},
      {Division : "Sylhet"},
      {Division : "Khulna"},
      {Division : "Barishal"},
      {Division : "Rangpur"},
    ];
    return DivisionList;
  }


  public getCityList() : any{
    let CityList = [
      { Cities: "Bagerhat" },
      { Cities: "Bandarban" },
      { Cities: "Barguna" },
      { Cities: "Barisal" },
      { Cities: "Bhola" },
      { Cities: "Bogura" },
      { Cities: "Brahmanbaria" },
      { Cities: "Chandpur" },
      { Cities: "Chapai Nawabganj" },
      { Cities: "Chattogram" },
      { Cities: "Chuadanga" },
      { Cities: "Comilla" },
      { Cities: "Cox's Bazar" },
      { Cities: "Dhaka" },
      { Cities: "Dinajpur" },
      { Cities: "Faridpur" },
      { Cities: "Feni" },
      { Cities: "Gaibandha" },
      { Cities: "Gazipur" },
      { Cities: "Gopalganj" },
      { Cities: "Habiganj" },
      { Cities: "Jamalpur" },
      { Cities: "Jashore" },
      { Cities: "Jhalokathi" },
      { Cities: "Jhenaidah" },
      { Cities: "Joypurhat" },
      { Cities: "Khagrachari" },
      { Cities: "Khulna" },
      { Cities: "Kishoreganj" },
      { Cities: "Kushtia" },
      { Cities: "Lakshmipur" },
      { Cities: "Lalmonirhat" },
      { Cities: "Madaripur" },
      { Cities: "Magura" },
      { Cities: "Manikganj" },
      { Cities: "Meherpur" },
      { Cities: "Moulvibazar" },
      { Cities: "Munshiganj" },
      { Cities: "Mymensingh" },
      { Cities: "Naogaon" },
      { Cities: "Narail" },
      { Cities: "Narayanganj" },
      { Cities: "Narsingdi" },
      { Cities: "Natore" },
      { Cities: "Netrokona" },
      { Cities: "Nilphamari" },
      { Cities: "Noakhali" },
      { Cities: "Pabna" },
      { Cities: "Panchagarh" },
      { Cities: "Patuakhali" },
      { Cities: "Pirojpur" },
      { Cities: "Rajbari" },
      { Cities: "Rajshahi" },
      { Cities: "Rangamati" },
      { Cities: "Rangpur" },
      { Cities: "Satkhira" },
      { Cities: "Shariatpur" },
      { Cities: "Sherpur" },
      { Cities: "Sirajganj" },
      { Cities: "Sunamganj" },
      { Cities: "Sylhet" },
      { Cities: "Tangail" },
      { Cities: "Thakurgaon" }
    ];    
    return CityList;
  }

  public getCountryList() : any{
    let CountryList = [
      {Country : "Bangladesh"},
    ];
    return CountryList;
  }

  public getUserRoleList() : any{
    let UserRoleList = [
      {UserRole : "Customer"},
      {UserRole : "Staff"},
      {UserRole : "Manager"}
    ];
    return UserRoleList;
  }

  public getStatusList() : any{
    let StatusList = [
      {Status : "Active"},
      {Status : "InActive"}
    ];
    return StatusList;
  }

}
