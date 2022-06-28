import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GameService } from './game.service';


@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get('/:category') //     /games/:category -> 술게임 카테고리 별로 조회
  FindGamesByCategory(
    @Param('category') category: string
  ){
    return this.gameService.findGamesByCategory(category); //한국어로 파라미터 넘겨도 가능?
  }


  @Get('/:category/:id') //      /games/:category/:id -> 카테고리에서 원하는 게임으로 조회
  FindGameByCategoryAndId(
    @Param('category') category: string,
    @Param('id') id: string
  ){
    return this.gameService.findGameByCategoryAndId(category, +id);
  }
}
