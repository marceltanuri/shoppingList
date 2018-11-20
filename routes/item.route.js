const express = require('express');
const router = express.Router();
const item_controller = require('../controllers/item.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', item_controller.test);

router.post('/', item_controller.create);
router.get('/:id', item_controller.details);
router.findAll('/', item_controller.findAll);
router.put('/:id', item_controller.update);
router.delete('/:id', item_controller.delete);

module.exports = router;

