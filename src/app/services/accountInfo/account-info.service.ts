import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountInfoService {

  constructor(private http: HttpClient) { }

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
}
