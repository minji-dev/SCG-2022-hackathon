import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { file } from "./file.entity"
import { Game } from "./game.entity";

@Entity()
export class Voice{
    @PrimaryGeneratedColumn()
    id: number;
    
    //Foreign key설정
    @ManyToOne(() => Game, (game)=>game.voices)
    @JoinColumn({name:"game_id"})
    game:Game;

    @OneToOne(()=> file)
    @JoinColumn({name:"file_id"})
    file: file;

    @Column("char", {length:10})
    type: string;
}