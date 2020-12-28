import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCreditCard,
  faLock,
  faTruck,
} from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { AlertasService } from '../service/alertas.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faTruck = faTruck;
  faCreditCard = faCreditCard;
  faLock = faLock;
  faWhatsapp = faWhatsapp;

  token = environment.token
  

  constructor(
    private router: Router,
    private alert: AlertasService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);
 
  }

  compras(){
    if(this.token == ''){
      this.alert.showAlertInfo('Faça login para ir às compras')
      this.router.navigate(['/login'])
    }else{
      this.router.navigate(['/compras'])
    }
  }
  


}
