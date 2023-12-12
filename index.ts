import express from 'express';
import type {Request, Response, Application} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mountRoutes from './routes';

const app: Application = express();
app.use(cors());
app.use(bodyParser.json());
//const port = process.env.PORT ?? 3001;

app.use(
	bodyParser.urlencoded({
		extended: true,
	}),
);

mountRoutes(app);

app.listen(3001, '0.0.0.0', () => {
	console.log(`Server is listening on http://143.198.66.254:3001`);
});

app.get('/test', (req, res) => {
	res.send({express: "Test succeeded"});
});
