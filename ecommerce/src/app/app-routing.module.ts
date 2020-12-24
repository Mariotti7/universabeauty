import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcessoComponent } from './acesso/acesso.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ComprasComponent } from './compras/compras.component';
import { ContatoComponent } from './contato/contato.component';
import { DeleteCategoriaComponent } from './delete-categoria/delete-categoria.component';
import { DeleteProdutoComponent } from './delete-produto/delete-produto.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostCategoriaComponent } from './post-categoria/post-categoria.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { PutCategoriaComponent } from './put-categoria/put-categoria.component';
import { PutProdutoComponent } from './put-produto/put-produto.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  { path: 'produtos', component: ProdutosComponent},
  { path: 'contato', component: ContatoComponent},
  { path: 'login', component: LoginComponent},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'acesso', component: AcessoComponent },
  { path: 'admin', component: AdministradorComponent },
  { path: 'cadastro-categoria', component: PostCategoriaComponent},
  { path: 'editar-produto/:id', component: PutProdutoComponent},
  { path: 'delete-produto/:id',  component: DeleteProdutoComponent},
  { path: 'editar-categoria/:id', component: PutCategoriaComponent},
  { path: 'delete-categoria/:id', component: DeleteCategoriaComponent},
  { path: 'compras', component: ComprasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
