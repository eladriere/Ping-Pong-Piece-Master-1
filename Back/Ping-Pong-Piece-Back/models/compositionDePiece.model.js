const {DataTypes, STRING} = require("sequelize");
const {sequelize} = require("../sql/postgresql.db");

const tableCompositionPiece = sequelize.define('CompositionPieces', {
    idCompositionPiece : {primaryKey: true, type: DataTypes.NUMBER, notNull: true},
    idPieceOrigine : {type: DataTypes.NUMBER, notNull: true},
    idPieceCompose : {type: DataTypes.NUMBER, notNull: true},
    QuantitePiece : {type: DataTypes.NUMBER, notNull: true},
})

exports.tableCompositionPiece = tableCompositionPiece;