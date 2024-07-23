import { check } from 'express-validator';

export const paintingsValidator = [
    check("name")
        .exists()
        .withMessage("Name is required")
        .isString()
        .withMessage("Name should be a string")
        .isLength({ min: 4 })
        .withMessage("Name should be at least 2 characters"),
    check("author")
        .exists()
        .withMessage("Author is required")
        .isNumeric()
        .withMessage("Author should be a number"),
    check("description")
        .exists()
        .withMessage("Description is required")
        .isString()
        .withMessage("Description should be a string"),
    check("year")
        .exists()
        .withMessage("Year is required")
        .isString()
        .withMessage("Year should be a string"),
];
