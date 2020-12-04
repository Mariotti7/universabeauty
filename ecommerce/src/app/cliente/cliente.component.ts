import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  userLogin = new UserLogin()

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    this.userLogin.nome = localStorage.getItem('nome')
  }

  findName(){
    this.auth.logar(this.userLogin).subscribe((resp: UserLogin)=>{
      this.userLogin = resp
      localStorage.setItem('nome', this.userLogin.nome)
    })
  }

}
