import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Field } from "./field.entity";
import { File } from "./file.entity";

@Entity()
export class Field_File {
    @PrimaryGeneratedColumn()
    id: number;

    //Foreign key 설정하기
    @ManyToOne( () => Field, (field)=>field.field_file )
    @JoinColumn({name: 'field_id'})
    field_id: Field[];

    @ManyToOne( () => File, (file)=>file.field_file )
    @JoinColumn({name: 'file_id'})
    file_id: File[];
}
