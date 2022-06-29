import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { File } from './entities/file.entity';
import { Field_File } from './entities/field_file.entity';
import { Field } from './entities/field.entity';

@Injectable()
export class AppService {
    constructor(
        @InjectRepository(File) private fileRepository:Repository<File>,
        @InjectRepository(Field) private fieldRepository:Repository<Field>,
        @InjectRepository(Field_File) private fieldfileRepository:Repository<Field_File>
    ){}
    
    async loadFiles(){
        const result = await this.fieldfileRepository
        .createQueryBuilder('f_fi')
        .innerJoin('f_fi.field_id', 'f')
        .innerJoin('f_fi.file_id', 'fi')
        .select([
            'f_fi.id',
            'f.name',
            'fi.name',
            'fi.location'
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