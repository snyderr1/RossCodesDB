import express from 'express';
import type {Request, Response, Application} from 'express';
import { Pool, Client } from 'pg';
import 'dotenv/config'

const pool_secret = new Pool({
	host: 'localhost',
	port: 5432,
	database: 'projects',
	user: process.env.DBUSER,
	password: process.env.DBPASSWORD,
	connectionTimeoutMillis: 10000
});

async function query_db(text: string) {
	
	const ret = await pool_secret.connect()
	const data = await pool_secret.query(text);
	return data;
}

export default query_db;


