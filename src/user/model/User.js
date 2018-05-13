/*export */
class User {
    constructor(id, name, sirname) {
        this.id = id;
        this.name = name;
        this.sirname = sirname;
    }
}

module.exports = {
    User: User
};