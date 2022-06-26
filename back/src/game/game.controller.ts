import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GameService } from './game.service';


@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get() //     /games -> 술게임 목록
  FindAllGames(){
    return this.gameService.findAllGames();
  }

  
}
