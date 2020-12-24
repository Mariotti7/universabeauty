import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
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
  nome = environment.nome


  constructor(
    private auth: AuthService,
    private router: Router,
    private alert: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  entrar(){
    if(this.userLogin.senha == null){
      this.alert.showAlertDanger("Senha inválida")
    }
    else{
    this.auth.logar(this.userLogin).subscribe((resp: UserLogin)=>{
      this.userLogin = resp
      environment.token = this.userLogin.token
      if(this.userLogin.usuario === 'linghelmarlaadmin' && this.userLogin.senha === 'Gustavo@123'){
        environment.usuario = this.userLogin.usuario
        environment.nome = this.userLogin.nome
        environment.foto = this.userLogin.foto
        this.router.navigate(['/admin'])
        this.alert.showAlertSuccess('Olá, Linghel Marla! Bem Vinda, Chefe!')
      }
      else{
        environment.usuario = this.userLogin.usuario
        environment.nome = this.userLogin.nome
        environment.foto = this.userLogin.foto
        this.router.navigate(['/acesso'])
        this.alert.showAlertSuccess('Que alegria ter você aqui!')
      }
    }, erro =>{
      if(erro == 500){
        this.alert.showAlertDanger('Usuário ou senha estão incorretos!')
      }
    })
  }}

}
