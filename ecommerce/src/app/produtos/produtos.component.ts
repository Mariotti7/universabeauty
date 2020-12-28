import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCreditCard, faHome, faLock, faTruck } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment.prod';
import { AlertasComponent } from '../alertas/alertas.component';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faTruck = faTruck;
  faCreditCard = faCreditCard;
  faLock = faLock;
  faHome = faHome;
  
  produto = new Produto;
  listaProduto: Produto[];
  nome: string;

  categoria = new Categoria;
  listaCategoria: Categoria[]


  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private router: Router,
    private alert: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    this.findAllProdutos()
    this.findAllCategorias()

    if(environment.token == ''){
      this.router.navigate(['/produto'])
    }

  }

  findAllProdutos(){
    this.produtoService.getAllProdutos().subscribe((resp: Produto[])=>{
      this.listaProduto = resp
    })
  }

  findAllCategorias(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[])=>{
      this.listaCategoria = resp
    })
  }
}
