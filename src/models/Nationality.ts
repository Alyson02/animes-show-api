import Joi from "joi";

export default Joi.object({
    country: Joi.string().required(),
    state: Joi.string().required()
})