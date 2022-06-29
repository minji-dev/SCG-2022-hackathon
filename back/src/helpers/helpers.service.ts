import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Db, Repository } from 'typeorm';
import { Game } from '../entities/game.entity';
// import { Game_File } from "../entities/game_file.entity";
// import { Field_File } from "../entities/field_file.entity";


@Injectable()
export class HelpersService {
  constructor(  
    @InjectRepository(Game) private gameRepository: Repository<Game>,
    // @InjectRepository(Game_File) private fieldRepository: Repository<Game_File>,
    // @InjectRepository(Field_File) private fileRepository: Repository<Field_File>,
    ){}
    
  async getAllHelpers() { //전체 헬퍼의 image 파일
    const helpers: string[] = ["훈민정음", "레코드잉잉잉", "지하철"];
    let result = [];
    let result_1 = await this.gameRepository.createQueryBuilder('g')
        .leftJoinAndSelect('g.field', 'f')
        .leftJoinAndSelect('g.game_file', 'g_fi')
        .leftJoinAndSelect('g_fi.file_id', 'fi')
        .select([
            'g.id', 'g.name',
            'f.id', 'f.name',
            'g_fi.id', 'g_fi.type',
            'fi.id', 'fi.name', 'fi.mime', 'fi.location',
        ])
        .where("g.name = :name", { name: helpers[0] })
        .getMany();

    let result_2 = await this.gameRepository.createQueryBuilder('g')
        .leftJoinAndSelect('g.field', 'f')
        .leftJoinAndSelect('g.game_file', 'g_fi')
        .leftJoinAndSelect('g_fi.file_id', 'fi')
        .select([
            'g.id', 'g.name',
            'f.id', 'f.name',
            'g_fi.id', 'g_fi.type',
            'fi.id', 'fi.name', 'fi.mime', 'fi.location',
        ])
        .where("g.name = :name", { name: helpers[1] })
        .getMany();

    let result_3 = await this.gameRepository.createQueryBuilder('g')
        .leftJoinAndSelect('g.field', 'f')
        .leftJoinAndSelect('g.game_file', 'g_fi')
        .leftJoinAndSelect('g_fi.file_id', 'fi')
        .select([
            'g.id', 'g.name',
            'f.id', 'f.name',
            'g_fi.id', 'g_fi.type',
            'fi.id', 'fi.name', 'fi.mime', 'fi.location',
        ])
        .where("g.name = :name", { name: helpers[2] })
        .getMany();
        
    result.push(result_1, result_2, result_3); 
    return result;
  }

  async getHelper(game) {
    let random;
    
    if(game == 0) { //훈민정음
        const result = [];
        const initialSound: string[] = [
            "ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ",
            "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅎ"
        ];
        for(let i=0; i<2; i++) {
            random = Math.floor(Math.random() * 11);
            result.push(initialSound[random]);
        }
        return result;
    } else if(game == 1) { //지하철
        const lines: string[] = ["1", "2", "3", "4", "5", "9", "수인분당선"];
        random = Math.floor(Math.random() * 7);
        return lines[random];
    } else if(game == 2) { //레코드
        const singers: string[  ] = ["싸이", "IU", "빅뱅", "소녀시대", "엑소", "방탄소년단", "블랙핑크", "트와이스", "레드벨벳"];
        random = Math.floor(Math.random() * 9);
        return singers[random];
    } else if(game == 3) { //랜덤추천
        random = Math.floor(Math.random() * 19 + 1);
        let result = await this.gameRepository.createQueryBuilder('g')
            .leftJoinAndSelect('g.field', 'f')
            .leftJoinAndSelect('g.game_file', 'g_fi')
            .leftJoinAndSelect('g_fi.file_id', 'fi')
            .select([
                'g.id', 'g.name', 'g.context', 'g.level',
                'f.id', 'f.name',
                'g_fi.type',
                'fi.id', 'fi.name', 'fi.mime', 'fi.location',
            ])
            .where("g.id = :id", { id: random })
            .getMany();
        return result;
    }
  }

}