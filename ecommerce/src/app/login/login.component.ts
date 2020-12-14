import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { AlertasService } from '../service/alertas.service';
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
    private router: Router,
    private alert: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    this.userLogin.nome = localStorage.getItem('nome')
  
  }

  entrar(){
    if(this.userLogin.senha == null){
      this.alert.showAlertDanger("Senha inválida")
    }
    else{
    this.auth.logar(this.userLogin).subscribe((resp: UserLogin)=>{
      this.userLogin = resp
      localStorage.setItem('token', this.userLogin.token)
      if(this.userLogin.usuario === 'linghelmarlaadmin' && this.userLogin.senha === 'Gustavo@123'){
        localStorage.setItem('usuario', this.userLogin.usuario)
        localStorage.setItem('nome', this.userLogin.nome)
        this.router.navigate(['/admin'])
        this.alert.showAlertSuccess('Olá, Linghel Marla! Bem Vinda, Chefe!')
      }else{
        localStorage.setItem('usuario', this.userLogin.usuario)
        localStorage.setItem('nome', this.userLogin.nome)
        this.router.navigate(['/acesso'])
        this.alert.showAlertSuccess('Que alegria ter você aqui!')
      }
    })
  }}

}
