import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin = new UserLogin()

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    this.userLogin.nome = localStorage.getItem('nome')
  }

  entrar(){
    this.auth.logar(this.userLogin).subscribe((resp: UserLogin)=>{
      this.userLogin = resp
      localStorage.setItem('token', this.userLogin.token)
      localStorage.setItem('nome', this.userLogin.nome)
      this.router.navigate(['/acesso'])
    })
  }

}
