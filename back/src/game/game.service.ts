import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from './entities/game.entity';
import { Repository } from 'typeorm';
import { Field } from './entities/field.entity';
import { file } from './entities/file.entity';
import { Voice } from './entities/voice.entity';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game) private gameRepository: Repository<Game>,
    @InjectRepository(Field) private fieldRepository: Repository<Field>,
    @InjectRepository(file) private fileRepository: Repository<file>,
    @InjectRepository(Voice) private voiceRepository: Repository<Voice>
    ){}
  //constructor(@InjectRepository(Field) private fieldRepositary: Repository<Field>){}
  
  async findAllGames():Promise<Game[]>{
    return await this.gameRepository.find();
  }

  async findField():Promise<Field[]>{
    return await this.fieldRepository.find();
  }
}
