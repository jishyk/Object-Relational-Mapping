const express = require('express');
const routes = require('./routes'); 
const sequelize = require('./config/connection');
<<<<<<< HEAD
const dotenv = require('dotenv');
=======
const dotenv = require('dotenv').config();  
>>>>>>> 84acf05c040c9886e1b3dd7893e162eb3815ee10

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
});
