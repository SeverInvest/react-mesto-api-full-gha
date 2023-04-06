const router = require('express').Router();
const {
  userIdValidate,
  userValidate,
  avatarValidate,
} = require('../middlewares/validation');

const {
  getUsers,
  getCurrentUser,
  getUserById,
  updateUserInfo,
  updateAvatar,
  getCountUsers,
} = require('../controllers/users');

router.get('/', getUsers);
router.get('/me', getCurrentUser);
router.patch('/me', userValidate, updateUserInfo);
router.patch('/me/avatar', avatarValidate, updateAvatar);
router.get('/count', getCountUsers);
router.get('/:userId', userIdValidate, getUserById);

module.exports = router;
