import Joi from "joi";

export default Joi.object({
    name: Joi.string,
    episodes: Joi.number,
    finished: Joi.bool,
    imageUrl: Joi.string,
    categoryId: Joi.number,
    authorId: Joi.number,
})





