import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login} from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

constructor(private http:HttpClient) { }

Url='http://localhost:8080/v1/login/';

autenticar(login:Login){
  return this.http.post(this.Url,login).toPromise();
}


}
