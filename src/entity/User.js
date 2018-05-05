import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class User {

    @ObjectIdColumn()
    id = ObjectID;

    @Column('String')
    name = String;

    @Column('String')
    sirname = String;

}