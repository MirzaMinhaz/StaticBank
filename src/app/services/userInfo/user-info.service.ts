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

  public getCityListByDivision(division: string): string[] {
    let CityList = [
      // Define your cities based on divisions
      // Format: { Division: 'Dhaka', Cities: ['City1', 'City2', ...] }
      { Division: 'Dhaka', Cities: ['Dhaka', 'Gazipur', 'Tangail', 'Manikganj', 'Munshiganj', 'Narayanganj', 'Narsingdi', 'Rajbari', 'Faridpur', 'Gopalganj', 'Madaripur', 'Shariatpur', 'Kishoreganj'] },
      { Division: 'Chittagong', Cities: ['Chittagong', 'Comilla', 'Coxs Bazar', 'Feni', 'Brahmanbaria', 'Chandpur', 'Lakshmipur', 'Noakhali', 'Rangamati', 'Khagrachari', 'Bandarban']    },
      { Division: 'Rajshahi', Cities: ['Bogra', 'Joypurhat', 'Naogaon', 'Natore', 'Chapai Nawabganj', 'Pabna', 'Rajshahi', 'Sirajganj']    },
      { Division: 'Rajshahi', Cities: ['Bogra', 'Joypurhat', 'Naogaon', 'Natore', 'Chapai Nawabganj', 'Pabna', 'Rajshahi', 'Sirajganj']    },
      { Division: 'Sylhet', Cities: ['Habiganj', 'Moulvibazar', 'Sylhet', 'Sunamganj']   },
      { Division: 'Khulna', Cities: ['Bagerhat', 'Chuadanga', 'Jessore', 'Jhenaidah', 'Khulna', 'Kushtia', 'Magura', 'Meherpur', 'Narail', 'Satkhira']    },
      { Division: 'Barishal', Cities: ['Barisal', 'Bhola', 'Jhalokathi', 'Patuakhali', 'Pirojpur', 'Barguna']   },
      { Division: 'Rangpur', Cities: ['Rangpur', 'Dinajpur', 'Gaibandha', 'Kurigram', 'Lalmonirhat', 'Nilphamari', 'Panchagarh', 'Thakurgaon']    }
      // ... Add other divisions and their cities
    ];
  
    const selectedDivisionCities = CityList.find(item => item.Division === division)?.Cities || [];
    return selectedDivisionCities;
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

  public getMaritalStatus() : any{
    let MaritalStatusList = [
      {MaritalStatus : "Single"},
      {MaritalStatus : "Married"}
    ];
    return MaritalStatusList;
  }

  public getStatusList() : any{
    let StatusList = [
      {Status : "Active"},
      {Status : "InActive"}
    ];
    return StatusList;
  }

}
