import express from 'express';
import type {Request, Response, Application} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mountRoutes from './routes';

const app: Application = express();
app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT ?? 3001;

app.use(
	bodyParser.urlencoded({
		extended: true,
	}),
);

mountRoutes(app);

app.listen(port, () => {
	console.log(`Server is listening on http://localhost:${port}`);
});
