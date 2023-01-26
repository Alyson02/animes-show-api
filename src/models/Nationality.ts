import Joi from "joi";

export default Joi.object({
    country: Joi.string,
    state: Joi.string
})