import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountInfoService {

  constructor(private http: HttpClient) { }


  public getAccountStatus() : any{
    let AccountStatusList = [
      {Status : "Active"},
      {Status : "InActive"}
    ];
    return AccountStatusList;
  }
}
