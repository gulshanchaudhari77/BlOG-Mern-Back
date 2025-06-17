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

// UPDATE kreneg  ID  se paramse se id aayengi and body se data 
router.put('/:id', (req, res) => {
  const { title, content } = req.body;
  db.query(
    'UPDATE blogs SET title = ?, content = ? WHERE id = ?',
    [title, content, req.params.id],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ message: 'Blog updated successfully' });
    }
  );
});


module.exports = router;
