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

  @Patch('/edit/:id')
  async updateGame(@Param('id') id: number, @Body() game: UpdateGameDto){
    await this.gameService.updateGame(id, game);
    return Object.assign({
      data: { ...game },
      statusCode: 200,
      statusMsg: 'updated successfully',
    });
  }

  @Delete('/:id')  //       /games/:id -> 특정 게임에 대한 게임 파일 및 게임 삭제
  async removeGame(@Param('id') id: number){
    await this.gameService.removeGame(id);
    return Object.assign({
      statusCode: 200,
      statusMsg: 'delete successful'
    })
  }
}
