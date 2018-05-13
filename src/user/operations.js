async function get(params) {
    try {
        const user = new User();
        user.name = 'Pavan';
        user.sirname = 'Ghadage';
        return await connection.mongoManager.save(user); // set breakpoint
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    get
};