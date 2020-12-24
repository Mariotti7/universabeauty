import { Component, OnInit } from '@angular/core';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  userLogin = new UserLogin()
  nome = environment.nome
  foto = environment.foto
  faSmile = faSmile;

  constructor() { }

  ngOnInit(){
    window.scroll(0,0)
    
  }


}
