import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }

  logar(userLogin: UserLogin){
    return this.http.post('http://localhost:8081/usuario/logar', userLogin)
  }

  cadastrar(user: Usuario){
    return this.http.post('http://localhost:8081/usuario/cadastrar', user)
  }

  btnSair(){
    let ok = false
    let token = localStorage.getItem('token')

    if(token != null){
      ok = true
    }
    return ok
  }

  btnLogin(){
    let ok = false
    let token = localStorage.getItem('token')

    if(token == null){
      ok = true
    }
    return ok
  }

}
