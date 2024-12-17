import { Body, Controller, Post, Get } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}
  //metodo post
  @Post()
  async criaUsuario(@Body() dadosUsuarios) {
    this.usuarioRepository.salvar(dadosUsuarios);
    return dadosUsuarios;
  }

  //metodo get
  @Get()
  async listUsuarios() {
    return this.usuarioRepository.listar();
  }
}
