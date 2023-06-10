const { Schema, model } = require('mongoose');
const Joi = require('joi');
const { handleShemaValidationErrors } = require('../middlewares');
const phoneRegexp = /^\((\d{3})\) \d{3}-\d{4}$/;
const contactShema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'Set name for contact'],
		},
		phone: {
			type: String,
			unique: true,
			match: phoneRegexp,
		},
		email: {
			type: String,
			unique: [true, 'email must be uniq'],
		},
		favorite: {
			type: Boolean,
			default: false,
		},
	},
	{ versionKey: false, timestamps: true }
);

contactShema.post('save', handleShemaValidationErrors);

const addSchema = Joi.object({
	name: Joi.string().required(),
	phone: Joi.string().pattern(phoneRegexp),
	email: Joi.string(),
	favorite: Joi.boolean(),
});

const updateFavoriteSchema = Joi.object({
	favorite: Joi.boolean().required(),
});

const schemas = {
	addSchema,
	updateFavoriteSchema,
};

const Contact = model('contact', contactShema);

module.exports = { Contact, schemas };
