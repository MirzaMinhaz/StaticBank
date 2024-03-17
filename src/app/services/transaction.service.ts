import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  public getAccountStatus() : any{
    let AccountStatusList = [
      {Status : "Active"},
      {Status : "InActive"}
    ];
    return AccountStatusList;
  }


  public getBranchDetails(): Observable<any> {
    return this.http.get<string>(`${environment.apiUrl}/TblBranches`);
  } 

  public getUserDetails(): Observable<any> {
    return this.http.get<string>(`${environment.apiUrl}/TblUserInfos`);
  }

  public getAccountTypeDetails(): Observable<any> {
    return this.http.get<string>(`${environment.apiUrl}/TblAccountTypes`);
  }


  public getSPRPODetailsByPONo(poNo: any): Observable<any> {
    return this.http.get<string>(`${environment.apiUrl}/TableSPRPurchaseOrders/getRemainingQtyFromSPRPO?poNo=${poNo}`);
  }

  public getSPRPIDetailsByPINo(piNo: any): Observable<any> {
    debugger
    return this.http.get<string>(`${environment.apiUrl}/TableSPRProformaInvoices/getSPRProformaInvoiceByPINo?piNo=${piNo}`);
  }

  public getReceiveInfoByPINo(piNo: any): Observable<any> {
    debugger
    return this.http.get<string>(`${environment.apiUrl}/TableSPRProformaInvoices/getReceiveInfoByPINo?piNo=${piNo}`);
  }


  public saveSPRProformaInvoiceInfo(ProformaInvoiceInfoList:any): Observable<any> {
    debugger
    return this.http.post(`${environment.apiUrl}/TableSPRProformaInvoices`,ProformaInvoiceInfoList);
  }

  public saveSPRReceiveInfo(ReceiveInfoList:any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/TableCommonInventories`,ReceiveInfoList);
  }
}
