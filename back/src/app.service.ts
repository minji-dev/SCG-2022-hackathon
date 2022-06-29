import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { File } from './entities/file.entity';

@Injectable()
export class AppService {
    constructor(
        @InjectRepository(File) private fileRepository:Repository<File>
    ){}
    
    async loadFiles(){
        const result = await this.fileRepository
        .createQueryBuilder('fi')
        .leftJoinAndSelect('fi.field_file', 'f_fi')
        .leftJoinAndSelect('f_fi.field_id', 'f')
        .select([
            'fi.id',
            'f.name',
            'fi.name',
            'fi.location',
        ])
        .where('fi.id = 1')
        .orWhere('fi.id = 29')
        .orWhere('fi.id = 36')
        .orWhere('fi.id = 49')
        .orWhere('fi.id = 59')
        .orWhere('fi.id = 63')
        .getMany();

        return result;
    }
}