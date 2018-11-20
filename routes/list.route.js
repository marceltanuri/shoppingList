const express = require('express');
const router = express.Router();
const list_controller = require('../controllers/list.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', list_controller.test);

router.post('/', list_controller.create);
router.get('/:id', list_controller.details);
router.get('/', list_controller.findAll);
router.put('/:id', list_controller.update);
router.delete('/:id', list_controller.delete);

module.exports = router;

