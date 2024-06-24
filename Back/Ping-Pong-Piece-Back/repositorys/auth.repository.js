const bcrypt = require('bcryptjs');
const {tableUtilisateur} = require("../models/utilisateur.model");

exports.authUser = async function authUser(mail, password) {
    console.log('authUser');
    const userAuth = await tableUtilisateur.findOne({ where: { mail: mail } });
    if (!userAuth) {
        return false;
    } else {
        return bcrypt.compareSync(password, userAuth.motDePasse);
    }
};