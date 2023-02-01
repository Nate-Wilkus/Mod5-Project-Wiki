const router = require('express').Router();
const { getAbout, getCreate, getHome, getNotFound, postCreate, getDetails } = require('../controllers/wikiController');

router.get('/', getHome);
router.get('/about', getAbout);
router.get('/create', getCreate);
router.post('/create', postCreate);
router.get('/details/:id', getDetails);
router.get('*', getNotFound)





module.exports = router;