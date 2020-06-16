import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getpendingbuses(data):Observable<any>
  {
    console.log(data)
    return this.http.post("https://busappnode.herokuapp.com/getbusforid",data)
  }
  getpendingtravels(data):Observable<any>
  {
    console.log(data)
    return this.http.post("https://busappnode.herokuapp.com/getpendingregs",data)
  }

  approvebus(data):Observable<any>
  {
    console.log(data)
    return this.http.post("https://busappnode.herokuapp.com/approvebus",data)
  }

  approvetravels(data):Observable<any>
  {
    console.log(data)
    return this.http.post("https://busappnode.herokuapp.com/approvetravels",data)
  }
  getallaccounts():Observable<any>
  {
    return this.http.get("https://busappnode.herokuapp.com/getallaccounts")
  }
  suspendaccount(data):Observable<any>
  {
    return this.http.post("https://busappnode.herokuapp.com/suspendaccount",data)
  }

}
