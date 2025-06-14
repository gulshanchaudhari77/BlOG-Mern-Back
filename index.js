const express = require('express');
const cors = require('cors');
const app = express();
const blogRoutes = require('./routes/blogRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/blogs', blogRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
