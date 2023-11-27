import home from './home';
import type express from 'express';

const mountRoutes = (app: express.Application) => {
	app.use('/', home);
};

export default mountRoutes;
