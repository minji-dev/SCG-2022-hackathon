import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from '../entities/game.entity';
import { Repository } from 'typeorm';
import { Field } from '../entities/field.entity';
import { File } from '../entities/file.entity';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game) private gameRepository: Repository<Game>,
    @InjectRepository(Field) private fieldRepository: Repository<Field>,
    @InjectRepository(File) private fileRepository: Repository<File>,
    ){}
  
  async findAllGames(){
    return await this.gameRepository.find();
  }

  async findOneGame(id:number){

  }

}
