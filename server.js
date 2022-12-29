const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DB.replace('<PASSWORD>', process.env.DB_PASSWORD);

mongoose.set('strictQuery', false);
mongoose.connect(DB).then(() => console.log('DB connection successful'));

const port = process.env.port || 8000;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});