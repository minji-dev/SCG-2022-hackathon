import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Field } from "./field.entity";
import { Voice } from "./voice.entity";

@Entity()
export class Game {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    context: string;

    @Column({nullable: true})
    level: number;

    //Foreign key 설정하기
    @ManyToOne( () => Field, (field)=>field.game )
    @JoinColumn({name:'field'})
    field: Field[];

    @OneToMany(() => Voice, (voice)=> voice.game) 
    voices: Voice[];
}
