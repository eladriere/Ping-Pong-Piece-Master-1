const {tablePiece} = require("./piece.model");
const {where, DataTypes} = require("sequelize");

exports.getAllPiece = async function getAllPiece() {
    return await tablePiece.findAll()
}

exports.getPieceById = async function getPieceById(idPiece) {
    if (idPiece !== undefined) {
        return await tablePiece.findOne({where: {idPiece: idPiece}})
    }
}

exports.getPieceByNom = async function getPieceByNom(nomPiece) {
    if (nomPiece !== undefined) {
        return await tablePiece.findOne({where: {nom: nomPiece}})
    }
}

exports.createPiece = function createPiece(body) {
    return tablePiece.create({
        nom: body.nom,
        livrable: body.livrable,
        intermediaire: body.intermediaire,
        acheteExterieur: body.acheteExterieur,
        idMatierePremiereDePiece: body.idMatierePremiereDePiece,
        idGammeDeFabrication: body.idGammeDeFabrication,
        prix: body.prix,
        libelle: body.libelle,
        idCompositionPiece: body.idCompositionPiece
    })
}
