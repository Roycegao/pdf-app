const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Slide } = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/api/slides', async (req, res) => {
  const slide = await Slide.findOne({ where: { id: 1 } });
  res.json(slide || { content: '' });
});

app.post('/api/slides', async (req, res) => {
  const { content } = req.body;
  let slide = await Slide.findOne({ where: { id: 1 } });
  if (slide) {
    slide.content = content;
    await slide.save();
  } else {
    slide = await Slide.create({ id: 1, content });
  }
  res.json(slide);
});

app.listen(3001, () => console.log('Server running at http://localhost:3001'));
