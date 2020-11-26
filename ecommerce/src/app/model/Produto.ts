import { Categoria } from './Categoria'
import { Usuario } from './Usuario'

export class Produto{
    public id: number
    public nome: string
    public descricao: string
    public preco: number
    public estoque: number
    public quantidade: number
    public categoria: Categoria
    public compra: Usuario
}