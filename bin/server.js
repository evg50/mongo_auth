const app = require('../app');
const mongoose = require('mongoose');

const { PORT = 3000, DB_HOST } = process.env;

// app.listen(PORT, () => {
// 	console.log(`Server is ruuning. Use our API on port: ${PORT}`);
// });

mongoose
	.connect(DB_HOST) // connect  to base
	.then(() => console.log('Database connect'))
	.then(() => app.listen(PORT))
	.catch((err) => {
		console.log(err.message);
		process.exit(1);
	});
