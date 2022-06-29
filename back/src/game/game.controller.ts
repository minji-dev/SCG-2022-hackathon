import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameDto } from "./dto/create-game.dto";
import { UpdateGameDto } from "./dto/update-game.dto";


@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get() //     /games?field=1 -> 술게임 카테고리 별로 조회
  findGamesByField(@Query('field') field: number){
    return this.gameService.findGamesByField(field);    
  }

  @Get('/:id') //      /games/1 -> 원하는 게임 id로 조회
  findGameById(@Param('id') id: number){
    return this.gameService.findGameById(id);
  }

  @Patch('/:id')
  async updateGame(@Param('id') id: number, @Body() game: UpdateGameDto) {
    await this.gameService.updateGame(id, game);
    return Object.assign({
      data: { ...game },
      statusCode: 200,
      statusMsg: 'updated successfully',
    });
  }
}
