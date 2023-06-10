const validation = (shema) => {
	return (req, res, next) => {
		console.log('shema', shema);
		const { error } = shema.validate(req.body);
		if (error) {
			error.status = 400;
			next(error);
		}
		next();
	};
};
module.exports = validation;
