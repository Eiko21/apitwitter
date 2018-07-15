const router = require('express').Router();
const controller = require('./user.controller');

router.post('/', controller.create);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.delete('/:id', controller.deleteUser);
router.post('/:id', controller.addTweet);
//router.get('/:id/tweet', controller.getTweetById);

module.exports = router;