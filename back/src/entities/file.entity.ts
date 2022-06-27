import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Game_File } from "./game_file.entity";
import { Field_File } from "./field_file.entity";


@Entity()
export class File{
    @PrimaryGeneratedColumn()
    id: number; //번호

    @Column("text")
    name: string; //파일명

    @Column()
    size: number; //파일크기

    @Column("varchar", {length:50})
    mime: string;

    @OneToMany( () => Game_File, (game_file)=>game_file.file_id )
    game_file: Game_File[];
    
    @OneToMany( () => Field_File, (field_file)=>field_file.file_id )
    field_file: Field_File[];
}