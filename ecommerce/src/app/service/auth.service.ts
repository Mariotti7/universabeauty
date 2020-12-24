import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { UserLogin } from '../model/UserLogin';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }

  logar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('http://localhost:8081/usuario/logar', userLogin)
  }

  cadastrar(user: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('http://localhost:8081/usuario/cadastrar', user)
  }

  btnSair(){
    let ok = false
    //let token = localStorage.getItem('token')

    if(environment.token != ''){
      ok = true
    }
    return ok
  }

  btnLogin(){
    let ok = false
    //let token = localStorage.getItem('token')

    if(environment.token == ''){
      ok = true
    }
    return ok
  }

}
