import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  produto = new Produto;
  listaProduto: Produto[];

  categoria = new Categoria;
  listaCategoria: Categoria[];
  idCategoria: number;

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    this.findAllProdutos()
    this.findAllCategorias()
  }

  cadastrar(){
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria

    if(this.produto.nome == null || this.produto.descricao == null || this.produto.preco == null || this.produto.estoque == null){
      alert('Preencha todos os campos!')
    }else{
      this.produtoService.postProduto(this.produto).subscribe((resp: Produto)=>{
        this.produto = resp
        this.produto = new Produto()
        alert('Produto cadastrado com sucesso!')
        this.findAllProdutos()
      })
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

  findByIdCategoria(){
    this.categoriaService.getByIdCategoria(this.categoria.id).subscribe((resp: Categoria)=>{
      this.categoria = resp
    })
  }


}
