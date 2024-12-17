import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutosRepository {
  private produtos = [];

  async listaProdutos() {
    return this.produtos;
  }

  async salva(dadosProdutos) {
    this.produtos.push(dadosProdutos);
  }
}
