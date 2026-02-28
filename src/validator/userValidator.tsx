import * as Joi from "joi";

export const userValidator = Joi.object({
    username: Joi.string().pattern(new RegExp("^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$"))
        .messages({"string.pattern.base": "Your did not match pattern"}),
    password: Joi.string().pattern(new RegExp("^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$"))
        .messages({"string.pattern.base": "Your did not match pattern"}),
})