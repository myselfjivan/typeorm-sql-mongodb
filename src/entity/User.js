import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id = undefined;

    @Column("varchar")
    name = "";

    @Column("varchar")
    sirname = "";

}