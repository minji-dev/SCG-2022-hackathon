import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GameService } from './game.service';


@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get() //     /games -> 술게임 목록
  FindAllGames(){
    return this.gameService.findAllGames();
  }

  @Get('/field')// 이거는 나중에 지워도 됨. 
  FindField(){
    return this.gameService.findField();
  }
  @Get('/:id')
  SpecificGame(){
    
  }
}
