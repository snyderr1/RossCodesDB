import express from 'express';
import createRouter from 'express-promise-router';
import { Pool, Client } from 'pg';
import query_db from './../external/db';
import cors from 'cors';

const router = createRouter();
router.use(cors())

export default router;

router.get('/db', async (req, res) => {
	//
	//res.send('{"text": "This is the home Router"}').status(200);
	const dat = await query_db("select * from projects")
	console.log(dat.rows[0])
	res.send(dat).status(200);
});
