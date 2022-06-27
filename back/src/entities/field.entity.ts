import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Game } from "./game.entity";

@Entity()
export class Field{
    @PrimaryGeneratedColumn()
    id: number; //번호

    @Column()
    name: string; //이름

    @OneToMany(()=>Game, (game)=>game.field)
    game:Game; //game entity와 연결
}