import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from '../entities/game.entity';
import { Repository } from 'typeorm';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game_File } from 'src/entities/game_file.entity';
import { Field } from 'src/entities/field.entity';
import { Field_File } from 'src/entities/field_file.entity';
import { File } from 'src/entities/file.entity';


@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game) private gameRepository: Repository<Game>,
    @InjectRepository(Game_File) private gamefileRepository: Repository<Game_File>,
    @InjectRepository(Field) private fieldRepository: Repository<Field>,
    @InjectRepository(Field_File) private fieldfileRepository: Repository<Field_File>,
    @InjectRepository(File) private fileRepository: Repository<File>,
    ){}
  
  async findGamesByField(field: number){
    const result = await this.gameRepository
    .createQueryBuilder('g')
    .leftJoin('g.field', 'f') //게임 - 분야 join
    .leftJoin('g.game_file', 'g_fi')  //게임 - 게임파일 join
    .leftJoin('g_fi.file_id', 'fi') //게임파일 - 첨부파일 join
    .select([
      'g.id',
      'g.name',
      'g.intro',
      'g.context',
      'g.level',
      'f.id',
      'f.name',
      'g_fi.type',
      'fi.id',
      'fi.name',
      'fi.mime',
      'fi.location'
    ])
    .where('f.id = :field', { field: field })
    .getMany(); 

    return result;
  }

  async findGameById(id: number){
    let result = await this.gameRepository
    .createQueryBuilder('g')
    .leftJoinAndSelect('g.field', 'f')
    .leftJoinAndSelect('g.game_file', 'g_fi')
    .leftJoinAndSelect('g_fi.file_id', 'fi')
    .select([
      'g.id',
      'g.name',
      'g.intro',
      'g.context',
      'g.level',
      'f.id',
      'f.name',
      'g_fi.type',
      'fi.id',
      'fi.name',
      'fi.mime',
      'fi.location'
    ])
    .where('g.id = :id', { id: id })
    .getMany(); 
    return result;
  }

  async updateGame(id: number, game: UpdateGameDto) {
    await this.gameRepository.update(
      id,
      game
    );
  }

  async removeGame(id: number){

  }
}
