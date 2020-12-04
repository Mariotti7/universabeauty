import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }
  
  getAllProdutos(){
    return this.http.get('http://localhost:8081/produto', this.token)
  }

  postProduto(produto: Produto){
    return this.http.post('http://localhost:8081/produto', produto, this.token)
  }

  getByIdProduto(id:number){
    return this.http.get(`http://localhost:8081/produto/id/${id}`, this.token)
  }

  putProduto(produto: Produto){
    return this.http.put('http://localhost:8081/produto', produto, this.token)
  }
  deleteProduto(id:number){
    return this.http.delete(`http://localhost:8081/produto/${id}`, this.token)
  }

}
