import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class file{
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    name: string;

    @Column()
    size: number;

    @Column("varchar", {length:50})
    mime: string;
}