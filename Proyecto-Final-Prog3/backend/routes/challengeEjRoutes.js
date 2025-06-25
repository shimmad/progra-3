const express = require('express');
const router = express.Router();
const ChallengeEjController = require('../controllers/ChallengeEjController');
const catchAsync = require('../utils/catchAsync');
const challengEjValido = require('../middleware/challengEjValido.js');


router.put('/:id', challengEjValido, catchAsync(ChallengeEjController.update));
router.get('/', catchAsync(ChallengeEjController.getAll));
router.post('/', challengEjValido, catchAsync(ChallengeEjController.create));
router.get('/:id', catchAsync(ChallengeEjController.getAllByChallenge));
router.delete('/:id', catchAsync(ChallengeEjController.delete));

module.exports = router;
