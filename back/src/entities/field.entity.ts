import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Game } from "./game.entity";

@Entity()
export class Field{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(()=>Game, (game)=>game.field)
    game:Game;
}