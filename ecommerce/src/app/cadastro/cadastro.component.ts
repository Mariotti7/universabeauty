import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user = new Usuario()
  senha: string

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  cadastrar(){
    if(this.senha === this.user.senha){
      this.authService.cadastrar(this.user).subscribe((resp: Usuario)=>{
        this.user = resp
        this.router.navigate(['/login'])
        alert('Cadastro realizado com sucesso!')
      })
    }else{
      alert('Senhas não conferem')
    }
  }
  
  conferirSenha(event:any){
    this.senha = event.target.value
  }


}
