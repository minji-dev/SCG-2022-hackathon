import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from './entities/game.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GameService {
  constructor(@InjectRepository(Game) private gameRepository: Repository<Game>){}
  //constructor(@InjectRepository(Field) private fieldRepositary: Repository<Field>){}
  
  async findAllGames():Promise<Game[]>{
    return await this.gameRepository.find();
  }
}
