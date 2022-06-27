import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from '../entities/game.entity';
import { Repository } from 'typeorm';
//import { Field } from '../entities/field.entity';
//import { File } from '../entities/file.entity';
import { Game_File } from 'src/entities/game_file.entity';
import { Field_File } from 'src/entities/field_file.entity';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game) private gameRepository: Repository<Game>,
    //@InjectRepository(Field) private fieldRepository: Repository<Field>,
    //@InjectRepository(File) private fileRepository: Repository<File>,
    @InjectRepository(Game_File) private game_fileRepository: Repository<Game_File>,
    @InjectRepository(Field_File) private field_fileRepository: Repository<Field_File>
    ){}
  
  async findAllGames(){
    //조회결과 저장
    const db = [];

    //게임 - 분야 조회
    const result1 = await this.gameRepository
    .createQueryBuilder('g')
    .leftJoinAndSelect('g.field', 'f')
    .where('g.field = f.id')
    .getMany();
    db.push(result1);

    return db;
  }

  async findOneGame(id:number){
    //조회결과 저장
    const db = [];

    
  }

}
