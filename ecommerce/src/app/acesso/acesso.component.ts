import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCreditCard, faLock, faTruck } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css']
})
export class AcessoComponent implements OnInit {

  faLock = faLock;
  faCreditCard = faCreditCard;
  faTruck = faTruck;

  produto = new Produto;
  listaProduto: Produto[];
  nome: string;

  categoria = new Categoria;
  listaCategoria: Categoria[];
  idCategoria: number;

  foto = environment.fotoProduto

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private alert: AlertasService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    this.findAllProdutos()
    this.findAllCategorias()

    /*if(environment.token == ''){
      this.alert.showAlertInfo('Sua seção expirou, faça o login novamente')
      this.router.navigate(['/login'])
    }*/
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

  findByIdCategoria(){
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria)=>{
      this.categoria = resp
    })
  }

 

}
