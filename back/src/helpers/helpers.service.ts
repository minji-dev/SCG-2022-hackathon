import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Db, Repository } from 'typeorm';
import { Game } from '../entities/game.entity';
import { Game_File } from "../entities/game_file.entity";
import { Field_File } from "../entities/field_file.entity";


@Injectable()
export class HelpersService {
  constructor(
    @InjectRepository(Game) private gameRepository: Repository<Game>,
    // @InjectRepository(Game_File) private fieldRepository: Repository<Game_File>,
    // @InjectRepository(Field_File) private fileRepository: Repository<Field_File>,
    ){}
    
  async getAllHelpers() { //전체 헬퍼. 3개. 굳이?
    const result = [];
    const helpers: string[] = ["훈민정음", "레코드EEE", "지하철"];

    const result_game = await this.gameRepository.createQueryBuilder('g')
        .innerJoin('g.field', 'f')
        .innerJoin('g.game_file', 'gf')
        .innerJoin('gf.file_id', 'fi')
        .select([
            'g.name',
            'g.context',
            'g.level',
            'f.name',
            'gf.type',
            'fi.name',
            'fi.size',
            'fi.mime',
        ])
        .where("g.name = :name", { name: helpers[0] })
        .andWhere("g.name = :name", { name: helpers[1] })
        .andWhere("g.name = :name", { name: helpers[2] })
        .getMany();

    result.push(result_game);
    return result;

  }

  async getHelper() { //헬퍼 중 하나
    const result = [];
    const helpers: string[] = ["훈민정음", "레코드EEE", "지하철"];
    let random = Math.floor(Math.random() * 3);
    let index = helpers[random];

    const result_game = await this.gameRepository.createQueryBuilder('g')
        .innerJoin('g.field', 'f')
        .select([
            'g.name',
            'g.context',
            'g.level',
            'f.name',
        ])
        .where("g.name = :name", { name: index })
        .getMany();

    const result_file = await this.gameRepository.createQueryBuilder('g')
        .innerJoin('g.game_file', 'gf')
        .innerJoin('gf.file_id', 'f')
        .select([
            'gf.type',
            'f.name',
            'f.size',
            'f.mime',
        ])
        .where("g.name = :name", { name: index })
        .getMany();

    result.push(result_game, result_file);
    return result;
  }

  async getRandom() {
    const result = [];
    let random = Math.floor(Math.random() * 19 + 1);

    const result_game = await this.gameRepository.createQueryBuilder('g')
        .innerJoin('g.field', 'f')
        .select([
            'g.name',
            'g.context',
            'g.level',
            'f.name',
        ])
        .where("g.id = :id", { id: random })
        .getMany();

    const result_file = await this.gameRepository.createQueryBuilder('g')
        .innerJoin('g.game_file', 'gf')
        .innerJoin('gf.file_id', 'f')
        .select([
            'gf.type',
            'f.name',
            'f.size',
            'f.mime',
        ])
        .where("g.id = :id", { id: random })
        .getMany();

    result.push(result_game, result_file);
    return result;
  }
}