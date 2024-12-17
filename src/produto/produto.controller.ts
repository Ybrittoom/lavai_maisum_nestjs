import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProdutosRepository } from './produto.repository';

@Controller('/produtos')
export class ProdutosController {
  constructor(private produtoRepository: ProdutosRepository) {}

  //metodo post
  @Post()
  async criarProduto(@Body() dadosProdutos) {
    this.produtoRepository.salva(dadosProdutos);
    return dadosProdutos;
  }

  //metodo get
  @Get()
  async listaProdutos() {
    return this.produtoRepository.listaProdutos();
  }
}
