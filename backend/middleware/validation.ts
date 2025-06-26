import { body } from 'express-validator';

export const validatePost = () => {
    return [
        body('id').notEmpty().isString().withMessage('Post Id must be a string'),
        body('username').notEmpty().isString().withMessage('Username must be a string'),
        body('text').notEmpty().isString().withMessage('Post text must be a string'),
        body('date').notEmpty().isISO8601().withMessage('Date must be a valid date'),
        body('likes').notEmpty().isInt({ min: 0 }).withMessage('Likes must be an integer with minimum value of 0'),
        body('comments').notEmpty().isArray().withMessage('Comments must be array')
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