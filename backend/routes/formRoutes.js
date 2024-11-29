const express = require('express');
const Form = require('../models/Form');

const router = express.Router();

router.post('/submit', async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit form' });
  }
});

module.exports = router;
