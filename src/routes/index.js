/*
* Author: Nikhil Unni <nikhi.unni@gmail.com>
* Created Date: Tuesday November 2nd 2021
* Version : 1.0.0
* Product : Router Page
*/

const express = require('express');
const router = express.Router();
const { getRecords } = require('../controllers/recordsController');

/**
 *  @route "/records", name="records_list"
 * @controller getRecords , Gets the filtered records from the database
*/
router.post('/records', getRecords);

module.exports = router;
