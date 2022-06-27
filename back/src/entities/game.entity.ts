import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Field } from "./field.entity";

@Entity()
export class Game {
    @PrimaryGeneratedColumn()
    id: number; //번호

    @Column()
    name: string; //이름

    @Column()
    context: string; //설명

    @Column({nullable: true})
    level: number; //난이도

    //Foreign key 설정하기
    @ManyToOne( () => Field, (field)=>field.game )
    @JoinColumn({name:'field'})
    field: Field[]; //분야
}
