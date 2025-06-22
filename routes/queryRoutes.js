const express = require('express');
const router = express.Router();
const {
  createQuery,
  getAllQueries,
  deleteQuery,
} = require('../controllers/queryController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Query:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         name:
 *           type: string
 *         contact:
 *           type: string
 *         query:
 *           type: string
 *         __v:
 *           type: integer
 */

/**
 * @swagger
 * /api/queries:
 *   post:
 *     summary: Submit a product query
 *     tags: [Queries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               contact:
 *                 type: string
 *               query:
 *                 type: string
 *     responses:
 *       201:
 *         description: Query submitted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Query'
 */
router.post('/', createQuery);

/**
 * @swagger
 * /api/queries:
 *   get:
 *     summary: Get all product queries
 *     tags: [Queries]
 *     responses:
 *       200:
 *         description: List of all queries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Query'
 */
router.get('/', getAllQueries);

/**
 * @swagger
 * /api/queries/{id}:
 *   delete:
 *     summary: Delete a query by ID
 *     tags: [Queries]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Query ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Query deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.delete('/:id', deleteQuery);

module.exports = router;
