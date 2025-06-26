import { body } from 'express-validator';

export const validatePost = () => {
    return [
        body('username').notEmpty().isString().withMessage('Username must be a string'),
        body('text').notEmpty().isString().withMessage('Post text must be a string')
    ];
}