const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all blogs
router.get('/', (req, res) => {
  db.query('SELECT * FROM blogs', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

router.post('/', (req, res) => {
  const { title, content } = req.body;
  db.query('INSERT INTO blogs (title, content) VALUES (?, ?)', [title, content], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ id: result.insertId, title, content });
  });
});

router.delete('/:id', (req, res) => {
  db.query('DELETE FROM blogs WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
});

module.exports = router;
