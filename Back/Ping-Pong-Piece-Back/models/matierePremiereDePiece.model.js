const {DataTypes, STRING} = require("sequelize");
const {sequelize} = require("../sql/postgresql.db");

const tableMatierePremiereDePiece = sequelize.define('MatieresPremieresDePieces', {
    idMatierePremiereDePiece : {primaryKey: true, type: DataTypes.UUIDV4, notNull: true},
    idMatiere : {type: DataTypes.UUIDV4, notNull: true},
    idPiece : {type: DataTypes.UUIDV4, notNull: true},
})

exports.tableMatierePremiereDePiece = tableMatierePremiereDePiece;