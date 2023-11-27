import express from 'express';
import type {Request, Response, Application} from 'express';
import { Pool, Client } from 'pg';
import pool_secret from "./secret";



async function query_db(text: string) {
	
	const ret = await pool_secret.connect()
	const data = await pool_secret.query(text);
	return data;
}

export default query_db;