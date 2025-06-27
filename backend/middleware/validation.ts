import { body } from 'express-validator';

export const validatePost = () => {
    return [
        body('text').notEmpty().isString().withMessage('Post text must be a string')
    ];
}

export const validateRegister = [
  body('username')
    .notEmpty().withMessage('Username is required')
    .isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
  body('password')
    .notEmpty().withMessage('Password is required')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];

export const validateLogin = [
  body('username')
    .notEmpty().withMessage('Username is required'),
  body('password')
    .notEmpty().withMessage('Password is required')
];