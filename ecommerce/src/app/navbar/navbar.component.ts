import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../model/Produto';
import { AuthService } from '../service/auth.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  nome: string;

  produto = new Produto();
  listaProduto: Produto[];

  constructor(
    public auth: AuthService,
    private router: Router,
    private produtoService: ProdutoService
  ) {}

  ngOnInit() {
    this.findAllProdutos();
  }

  sair() {
    this.router.navigate(['/login']);
    localStorage.clear();
  }

  findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProduto = resp;
    });
  }

  buscar() {
    if (this.router.navigate(['/produto']))
      this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
        this.listaProduto = resp;
      });
    if (this.router.navigate(['/acesso']))
      this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
        this.listaProduto = resp;
      });
  }

  findByNomeProduto() {
    if (this.nome == '') {
      this.findAllProdutos();
    } else {
      this.produtoService
        .getByNomeProduto(this.nome)
        .subscribe((resp: Produto[]) => {
          this.listaProduto = resp;
        });
    }
  }
}
