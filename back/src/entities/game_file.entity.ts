import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Game } from "./game.entity";
import { File } from "./file.entity";

@Entity()
export class Game_File {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("char", {length:10})
    type: string;

    //Foreign key 설정하기
    @ManyToOne( () => Game, (game)=>game.game_file )
    @JoinColumn({name: 'game_id'})
    game_id: Game[];

    @ManyToOne( () => File, (file)=>file.game_file )
    @JoinColumn({name: 'file_id'})
    file_id: File[];
}
