/*
* Author: Nikhil Unni <nikhi.unni@gmail.com>
* Created Date: Tuesday November 2nd 2021
* Version : 1.0.0
* Product : Database connection
*/

const { MongoClient } = require('mongodb');
const env = process.env.stage || 'dev';
const config = require('../config/config').config();

/**
 * To establish database connection
 *
 * @return {object | boolean} return connection object or false in case of failure
*/
const getConnection = async () => {
  const uri = config.mongo_url;

  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(config.database);
    return { client, db };
  } catch (e) {
    console.error(e);
    await client.close();
    return false;
  }
};

module.exports = { getConnection };
