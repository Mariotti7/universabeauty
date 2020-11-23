import { Component, OnInit } from '@angular/core';
import { faCreditCard, faLock, faTruck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css']
})
export class AcessoComponent implements OnInit {

  faLock = faLock;
  faCreditCard = faCreditCard;
  faTruck = faTruck;

  constructor() { }

  ngOnInit(): void {
  }

}
