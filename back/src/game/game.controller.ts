import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GameService } from './game.service';


@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get() //     /games -> 술게임 목록 전체 조회
  FindAllGames(){
    return this.gameService.findAllGames();
  }


  @Get('/:id') //      /games/id -> 특정 술게임 조회
  FindOneGame(
    @Param('id') id:string
  ){
    return this.gameService.findOneGame(+id);
  }
}
