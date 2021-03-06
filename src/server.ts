require('dotenv').config();

import app from './app';
import databaseConnection from './database/database.connection';

databaseConnection
  .then(() => {
    app.listen(process.env.APP_PORT, () => {
      console.log('Koa started');
    });
  })
  .catch(console.error);
