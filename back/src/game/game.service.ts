import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from '../entities/game.entity';
import { Repository } from 'typeorm';


@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game) private gameRepository: Repository<Game>,
    ){}
  
  async findGamesByCategory(category: string){
    const result = await this.gameRepository
    .createQueryBuilder('g')
    .leftJoinAndSelect('g.field', 'f') //게임 - 분야 join
    .leftJoinAndSelect('g.game_file', 'g_fi')  //게임 - 게임파일 join
    .leftJoinAndSelect('g_fi.file_id', 'fi') //게임파일 - 첨부파일 join
    .select([
      'g.id',
      'g.name',
      'g.context',
      'g.level',
      'f.id',
      'f.name',
      'g_fi.type',
      'fi.id',
      'fi.name',
      'fi.size',
      'fi.mime'
    ])
    .where('f.name = :category', {category: category})
    .getMany(); 

    return result;
  }

  async findGameByCategoryAndId(category:string, id:number){
    const result = await this.gameRepository
    .createQueryBuilder('g')
    .leftJoinAndSelect('g.field', 'f')
    .leftJoinAndSelect('g.game_file', 'g_fi')
    .leftJoinAndSelect('g_fi.file_id', 'fi')
    .select([
      'g.id',
      'g.name',
      'g.context',
      'g.level',
      'f.id',
      'f.name',
      'g_fi.type',
      'fi.id',
      'fi.name',
      'fi.size',
      'fi.mime'
    ])
    .where('f.name = :category', {category: category})
    .andWhere('g.id = :id', {id: id})
    .getMany(); 

    return result;
  }

}
