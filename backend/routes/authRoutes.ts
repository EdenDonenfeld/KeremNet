import express from 'express';
import multer from 'multer';
import { registerUser, loginUser } from '../controllers/authController';
import { validateLogin, validateRegister } from '../middleware/validation';

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }
});

router.post('/register', upload.single('profileImage'), validateRegister, registerUser);
router.post('/login', validateLogin, loginUser);

export default router;
