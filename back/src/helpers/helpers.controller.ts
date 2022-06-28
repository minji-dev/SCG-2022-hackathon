import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HelpersService } from './helpers.service';

@Controller('helpers')
export class HelpersController {
  constructor(private readonly helperService: HelpersService) {}

  @Get() // 술게임 도우미 목록
  GetAllHelpers(){
    return this.helperService.getAllHelpers();
  }

  @Get('/:game')// 4개 중 하나 고르기
  GetHelper(@Param('game') game: number){
    return this.helperService.getHelper(game);
  }
  
}