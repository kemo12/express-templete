const express = require('express');
const {
  index,
  show,
  sotre,
  destroy,
  update,
} = require('../controllers/note-controller');
const router = express.Router();

//routes
router.get('/', index);
router.get('/:noteId', show);
router.post('/', sotre);
router.put('/:noteId', update);
router.delete('/:noteId', destroy);

//modules export
module.exports = router;

/*
 * Routes Naming:
 * index      Get     https://localhost:5000/api/notes
 * show       Get     https://localhost:5000/api/notes/{:noteId}
 * store      Post    https://localhost:5000/api/notes
 * update     Put     https://localhost:5000/api/notes/{:noteId}
 * destroy    delete  https://localhost:5000/api/notes/{:noteId}
 */
