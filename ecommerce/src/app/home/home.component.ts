import { Component, OnInit } from '@angular/core';
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
import { Produto } from '../model/Produto';
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

  

  constructor() {}

  ngOnInit() {
    window.scroll(0, 0);
 
  }

  


}
