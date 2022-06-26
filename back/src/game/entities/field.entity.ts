import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Game } from "./game.entity";

@Entity()
export class Field{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}