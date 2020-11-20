import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCreditCard, faLock, faTruck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faTruck = faTruck;
  faCreditCard = faCreditCard;
  faLock = faLock;

  constructor() { }

  ngOnInit(): void {
  }

}
