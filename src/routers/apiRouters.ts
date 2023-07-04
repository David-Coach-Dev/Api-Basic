const expresss = require('express');
const apiControllers = require('../controllers/apiControllers');
const router = expresss.Router();

router
  .post('/test', apiControllers.Test);

module.exports = router;