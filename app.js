//required modules
const bodyParser = require('body-parser');
const express = require('express');
const userRoutes = require('./routes/user-routes');
const noteRoutes = require('./routes/note-routes');

// express instance
const app = express();

// express middlewares
app.use(bodyParser.urlencoded());
app.use('/api/users', userRoutes);
app.use('/api/notes', noteRoutes);

//express fallback Route
app.use('/', (req, res) => {
  throw new HttpError('Not Found - 404', 404);
});
//express error catch
app.use((error, req, res, next) => {
  res.status(error.code).json({ status: false, message: error.message });
});
//express listen
app.listen(5000);
