import Joi from "joi";

export default Joi.object({
    name: Joi.string().required().max(400),
    episodes: Joi.number().required(),
    finished: Joi.bool().required(),
    imageUrl: Joi.string().required().uri().max(400),
    categoryId: Joi.number().required().greater(0),
    authorId: Joi.number().default(0),
})





