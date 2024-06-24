const {DataTypes, STRING} = require("sequelize");
const {sequelize} = require("../sql/postgresql.db");

const tablePieceComposition = sequelize.define('PieceComposition', {
        idPieceComposition : {type: DataTypes.INTEGER, notNull: true},
        idPieceComposant : {type: DataTypes.INTEGER, notNull: false},
        idPieceCompose : {type: DataTypes.INTEGER, notNull: false},
    },
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    })



exports.tablePiece = tablePieceComposition;