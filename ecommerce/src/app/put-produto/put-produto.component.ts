import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-put-produto',
  templateUrl: './put-produto.component.html',
  styleUrls: ['./put-produto.component.css']
})
export class PutProdutoComponent implements OnInit {

  produto = new Produto;
  idPost: number;

  categoria = new Categoria;
  listaCategoria: Categoria[];
  idCategoria: number;

  constructor(
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    this.findAllCategorias()

    this.idPost = this.route.snapshot.params["id"]

    this.findByIdProduto(this.idPost)
  }

  findByIdProduto(id:number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto)=>{
      this.produto= resp
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

  salvar(){
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria

    this.produtoService.putProduto(this.produto).subscribe((resp: Produto)=>{
      this.produto = resp
      this.router.navigate(['/admin'])
      alert('Produto alterado com sucesso!')
    }, erro =>{
      if(erro.status == '500'){
        alert('Preencha todos os campos corretamente antes de enviar!')
    }
    })
  }

}
