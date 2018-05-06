const typeorm = require('typeorm');
const Entity = typeorm.Entity;
const EntitySchema = typeorm.EntitySchema;
const PrimaryGeneratedColumn = typeorm.PrimaryGeneratedColumn;
const Column = typeorm.Column;

const User = require('../model/User').User;

module.exports = new EntitySchema({
    name: "User",
    target: User,
    columns: {
        id: {
            primary: true,
            type: Number,
            generated: true
        },
        name: {
            type: String
        },
        sirname: {
            type: String
        }
    }
});