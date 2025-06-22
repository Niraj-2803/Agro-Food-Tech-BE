const Query = require('../models/queryModel');

exports.createQuery = async (req, res) => {
  try {
    const query = await Query.create(req.body);
    res.status(201).json(query);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllQueries = async (req, res) => {
  try {
    const queries = await Query.find();
    res.json(queries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteQuery = async (req, res) => {
  try {
    await Query.findByIdAndDelete(req.params.id);
    res.json({ message: 'Query deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
