const express = require('express');
const router = express.Router();
const ChallengeController = require('../controllers/ChallengeController');
const catchAsync = require('../utils/catchAsync');
const challengeValido = require('../middleware/challengeValido');

router.get('/', catchAsync(ChallengeController.getAll));
router.get('/:id', catchAsync(ChallengeController.getOne));
router.post('/', challengeValido, catchAsync(ChallengeController.create));
router.put('/:id', challengeValido, catchAsync(ChallengeController.update));
router.delete('/:id', catchAsync(ChallengeController.delete));

module.exports = router;