import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from '../entities/game.entity';
import { Repository } from 'typeorm';
import { Field } from '../entities/field.entity';
import { File } from '../entities/file.entity';

@Injectable()
export class HelpersService {
  constructor(
    @InjectRepository(Game) private gameRepository: Repository<Game>,
    // @InjectRepository(Field) private fieldRepository: Repository<Field>,
    // @InjectRepository(file) private fileRepository: Repository<file>,
    ){}
    
  async getAllHelpers(): Promise<Game[]>{ //전체 헬퍼. 3개. 굳이?
    const helpers: string[] = ["훈민정음", "레코드EEE", "지하철"];
    return await this.gameRepository.find({
      where: [
        { name: helpers[0] }, { name: helpers[1] }, { name: helpers[2] },
      ]
    });

  }

  async getHelper(): Promise<Game>{ //헬퍼 중 하나
    const helpers: string[] = ["훈민정음", "레코드EEE", "지하철"];
    let random = Math.floor(Math.random() * 3);
    let random_helper = helpers[random];
    return await this.gameRepository.findOneBy({ name: random_helper });
  }

  async getRandom(): Promise<Game>{
    let random = Math.floor(Math.random() * 6 + 1);
    // let random = Math.floor(Math.random() * 19 + 1);
    return await this.gameRepository.findOneBy({ id: random });
  }
}