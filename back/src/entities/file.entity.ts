import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class file{
    @PrimaryGeneratedColumn()
    id: number; //번호

    @Column("text")
    name: string; //파일명

    @Column()
    size: number; //파일크기

    @Column("varchar", {length:50})
    mime: string; //mime
}