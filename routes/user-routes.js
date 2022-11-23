const express = require('express');
const {
  show,
  index,
  sotre,
  update,
  destroy,
} = require('../controllers/user-controller');
const router = express.Router();

//routes
router.get('/', index);
router.get('/:userId', show);
router.post('/', sotre);
router.put('/:userId', update);
router.delete('/:userId', destroy);

//modules export
module.exports = router;

/*
 * Routes Naming:
 * index      Get     https://localhost:5000/api/users
 * show       Get     https://localhost:5000/api/users/{:userId}
 * store      Post    https://localhost:5000/api/users
 * update     Put     https://localhost:5000/api/users/{:userId}
 * destroy    delete  https://localhost:5000/api/users/{:userId}
 */
