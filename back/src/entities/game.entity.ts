import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Field } from "./field.entity";
import { Game_File } from "./game_file.entity";

@Entity()
export class Game {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    context: string;

    @Column()
    level: number;

    //Foreign key 설정하기
    @ManyToOne( () => Field, (field)=>field.game )
    @JoinColumn({name: 'field'})
    field: Field[];

    @OneToMany( () => Game_File, (game_file)=>game_file.game_id )
    game_file: Game_File[];
}
