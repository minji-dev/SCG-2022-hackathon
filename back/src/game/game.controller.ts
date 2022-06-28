import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { GameService } from './game.service';


@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get() //     /games/:field -> 술게임 카테고리 별로 조회
  findGamesByField(@Query('field') field: number){
    return this.gameService.findGamesByField(field);    
  }

  @Get('/:id') //      /games?id=0 -> 원하는 게임 id로 조회
  findGameById(@Param('id') id: number){
    return this.gameService.findGameById(id);
  }
}
