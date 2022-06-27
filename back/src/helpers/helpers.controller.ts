import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HelpersService } from './helpers.service';

@Controller('helpers')
export class HelpersController {
  constructor(private readonly helperService: HelpersService) {}

  @Get() //     /helpers -> 술게임 도우미 목록
  GetAllHelpers(){
    return this.helperService.getAllHelpers();
  }

  @Get('/name')// 3개 중 하나의 이름
  GetHelper(){
    return this.helperService.getHelper();
  }
  
  @Get('/random') // 전체 중 하나 (랜덤 추천)
  GetRandom(){
    return this.helperService.getRandom();
  }
}