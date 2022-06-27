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
  //constructor(@InjectRepository(Field) private fieldRepositary: Repository<Field>){}
  
  async findAllGames():Promise<Game[]>{
    return await this.gameRepository.find();
  }

  async findField():Promise<Field[]>{
    return await this.fieldRepository.find();
  }

  async test(){
    const db = [];
    const GameAndFieldAndVoice = await this.gameRepository
    .createQueryBuilder('g')
    .innerJoin('g.field', 'f')
    .innerJoin('g.voices', 'v')
    .select([
      'g.id',
      'g.name',
      'g.context',
      'g.level',
      'f.id',
      'f.name',
      'v.id',
      'v.type',
      'v.game_id',
      'v.file_id'
    ])
    .getMany();
    // const VoiceAndFile = await this.voiceRepository
    // .createQueryBuilder('v')
    // .innerJoin('v.game', 'g')
    // .innerJoin('v.file', 'fi')
    // .select([
    //   'v.id',
    //   'v.game_id',
    //   'v.file_id',
    //   'v.type',
    //   'g.id',
    //   'fi.id',
    //   'fi.name',
    //   'fi.size',
    //   'fi.mime'
    // ])
    // .where('v.game_id = g.id')
    // .andWhere('v.file_id = fi.id')
    // .getMany();

    db.push(GameAndFieldAndVoice);
    // db.push(VoiceAndFile);

    return db;
  }
}
