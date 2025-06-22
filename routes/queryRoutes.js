const express = require('express');
const router = express.Router();
const {
  createQuery,
  getAllQueries,
  deleteQuery,
} = require('../controllers/queryController');

router.post('/', createQuery);
router.get('/', getAllQueries);
router.delete('/:id', deleteQuery);

module.exports = router;
