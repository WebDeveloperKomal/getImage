import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {
   url ="https://fakestoreapi.com/products/1" 
  constructor(private http: HttpClient) { }



  getData(){
    return this.http.get('https://fakestoreapi.com/products/1');
  
  }
  // getData(): Observable<any[]> {
  //   return this.http.get('https://fakestoreapi.com/products/1');
  // }

}
