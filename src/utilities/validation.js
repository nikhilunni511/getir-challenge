/*
* Author: Nikhil Unni <nikhi.unni@gmail.com>
* Created Date: Tuesday November 2nd 2021
* Version : 1.0.0
* Product : Validations
*/

const jsonash = require("jsonash");

/**
 * Validate request body
 * 
 * @param {object} reqBody request body to validate.
 * @return {boolean | object} return true if success else return an object with error statements
*/
module.exports.validateRequest = (reqBody) => {
    const options = {
        rules: {
            startDate: {
                type: "string",
                required: true
            },
            endDate: {
                type: "string",
                required: true
            },
            minCount: {
                type: "number",
                required: true
            },
            maxCount: {
                type: "number",
                required: true
            }
        }
    }
    return jsonash.validate(reqBody, options);
}