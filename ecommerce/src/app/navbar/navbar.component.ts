import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment.prod';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  nome: string;

  faShoppingCart = faShoppingCart;

  constructor(
    public auth: AuthService,
    private router: Router,
    private alert: AlertasService
  ) {}

  ngOnInit() {
    
  }

  comprar(){
    if(environment.token == ''){
      this.alert.showAlertInfo('Faça login primeiro!')
      this.router.navigate(['/login'])
    }
    else{
    this.router.navigate(['/compras'])
  }
  }

  sair() {
    this.router.navigate(['/login']);
    environment.token = '';
  }

 
}
