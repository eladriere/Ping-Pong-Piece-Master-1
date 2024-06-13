const {DataTypes, STRING} = require("sequelize");
const {sequelize} = require("../sql/postgresql.db");

const tablePiece = sequelize.define('Pieces', {
        idPiece: {primaryKey: true, type: DataTypes.INTEGER, notNull: true, autoIncrement: true},
        nom: {type: DataTypes.STRING, notNull: true, unique: true},
        livrable: {type: DataTypes.BOOLEAN, notNull: true},
        intermediaire: {type: DataTypes.BOOLEAN, notNull: true},
        acheteExterieur: {type: DataTypes.BOOLEAN, notNull: true},
        idMatierePremiereDePiece: {type: DataTypes.INTEGER, notNull: false},
        idGammeDeFabrication: {type: DataTypes.INTEGER, notNull: true},
        prix: {type: DataTypes.DECIMAL, notNull: true},
        libelle: {type: DataTypes.STRING, notNull: false},
        idCompositionPiece: {foreignKey: true, type: DataTypes.INTEGER, notNull: true}
    },
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    })

exports.tablePiece = tablePiece;