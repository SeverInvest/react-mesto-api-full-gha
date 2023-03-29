const router = require('express').Router();
const NotFoundError = require('../errors/NotFoundError');
const routerUsers = require('./users');
const routerCards = require('./cards');
const { createUser, login } = require('../controllers/users');
const { authValidate, registerValidate } = require('../middlewares/validation');
const auth = require('../middlewares/auth');

router.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

router.post('/signup', registerValidate, createUser);
router.post('/signin', authValidate, login);
router.use(auth);
router.use('/users', routerUsers);
router.use('/cards', routerCards);
router.use((_, res, next) => {
  next(new NotFoundError('Resource not found'));
});

module.exports = router;
