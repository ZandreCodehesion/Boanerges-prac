import { Injectable, importProvidersFrom } from '@angular/core';
import { IAuth } from '../interface/auth';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { httpOptions } from '../networkProtocol/protocol';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
//import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  

  tokenUrl = environment.APIurl + '/connect/token';
  USERuRL = environment.APIurl + '/v1/admin/Users/current' ;

  //  httpOptions = {
  //   header: new HttpHeaders ({
  //     'Content-Type': 'application/json; charset=utf-8',
  //     'Authorization': `Bearer`
      
      
  //   }),
  // }

 

  getUsers(bearer: any): Observable<any>
  {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${bearer}`
    })
    return this.http.get(this.USERuRL, { headers : headers})
  }

   
  

  constructor(private http:HttpClient) { }

  
  login(loginform: IAuth):Observable<IAuth>{
    console.log(loginform);
    const body = new HttpParams()
    .set('grant_type', environment.auth.grant_type)
    .set('client_id', environment.auth.client_id)
    .set('client_secret', environment.auth.client_secret)
    .set('scope', environment.auth.scope)
    .set('username', loginform.username)
    .set('password', loginform.password);
    return this.http.post<IAuth>(this.tokenUrl, body,);
  }

  

  register(registerForm : any){

  }

  updateUserFormm = new FormGroup ({
    Name: new FormControl("", Validators.required),
    Surname: new FormControl("", Validators.required),
    Email: new FormControl("", Validators.required),
    ID_number: new FormControl("", Validators.required),
    DoB: new FormControl("", Validators.required)
  })

  // populateUserForm(user: any){
  //   this.updateUserFormm.setValue({
      
  //   })
  // }
}
