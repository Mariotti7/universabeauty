import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-post-categoria',
  templateUrl: './post-categoria.component.html',
  styleUrls: ['./post-categoria.component.css']
})
export class PostCategoriaComponent implements OnInit {

  categoria = new Categoria()
  listaCategoria: Categoria[]
  idCategoria: number;

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private alert: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    this.findAllCategorias()
  
  }

  cadastrar(){
    if(this.categoria.categoria == null){
      this.alert.showAlertInfo('Preencha o campo!')
    }else{
      this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria)=>{
        this.categoria = resp
        this.router.navigate(['/admin'])
        this.alert.showAlertSuccess('Categoria cadastrada com sucesso!')
        this.findAllCategorias()
        this.categoria = new Categoria()
      })
    }
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
