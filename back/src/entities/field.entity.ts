import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Game } from "./game.entity";
import { Field_File } from "./field_file.entity";


@Entity()
export class Field{
    @PrimaryGeneratedColumn()
    id: number; //번호

    @Column()
    name: string; //이름

    @OneToMany( () => Game, (game)=>game.field )
    game: Game;

    @OneToMany( () => Field_File, (field_file)=>field_file.field_id )
    field_file: Field_File[];
}