const express = require('express');
const pieceRepository = require('../models/piece.repository');
const router = express.Router();

router.get('/', async (req, res) => {
    res.send(await pieceRepository.getAllPiece());
});

router.post('/', async (req, res) => {
    if (!req.body) {
        res.sendStatus(400)
    }

    if (await isPieceAlreadyExist(req.body)) {
        res.sendStatus(401)
    } else {
        let result = pieceRepository.createPiece(req.body);
        if (result) {
            res.sendStatus(200)
        } else {
            res.sendStatus(403)
        }
    }
});

async function isPieceAlreadyExist(piece) {
    let result = await pieceRepository.getPieceByNom(piece.nom)
    return !!result;
}

exports.initializeRoutes = () => router;