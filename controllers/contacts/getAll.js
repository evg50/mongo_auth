const { Contact } = require('../../models');
const getAll = async (req, res, next) => {
	// console.log('Contact', Contact);
	const result = await Contact.find({});

	res.json({
		status: 'succes',
		code: 200,
		data: {
			result,
		},
	});
};

module.exports = getAll;
