/*
 * Author: Nikhil Unni <nikhi.unni@gmail.com>
 * Created Date: Tuesday October 5th 2021
 * Version : 1.0.0
 * Product : Records controller
 */

const { findAllRecords } = require('../repositories/records');
const { getConnection } = require('../utilities/mongo');
const { validateRequest } = require('../utilities/validation');
const { response } = require('../utilities/response');

/**
 * Returns records from the database
*/
module.exports.getRecords = async (req, res) => {
    const reqBody = req.body;
    const validate = validateRequest(reqBody);
    if (validate.error) {
        delete validate.error;
        return res.status(422).json(response(1, {}, 'Missing required parameter(s)', validate));
    }
    const { client, db } = await getConnection();

    try {
        const records = await findAllRecords(db, reqBody);

        if (!records.length)
            return res.status(404).json(response(1, {}, 'No data available in the specified range'));
        return res.status(200).json(response(0, records, 'Success'));
    } catch (e) {
        console.error(e);
        return res.json(response(1, {}, 'Something went wrong, please try again later.', validate));
    } finally {
        await client.close();
    }
};
