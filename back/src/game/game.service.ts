import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Field } from './entities/field.entity';
import { Game } from './entities/game.entity';

@Injectable()
export class GameService {
  constructor(@InjectRepository(Game) private gameRepositary: Repository<Game>){}
  //constructor(@InjectRepository(Field) private fieldRepositary: Repository<Field>){}
  
  async findAllGames(){
    return await this.gameRepositary.find(); //모든 게임 목록 반환
  }
}
