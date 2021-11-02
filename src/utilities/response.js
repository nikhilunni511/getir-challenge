/*
* Author: Nikhil Unni <nikhi.unni@gmail.com>
* Created Date: Tuesday November 2nd 2021
* Version : 1.0.0
* Product : Validations
*/

/**
 * Returns formatted response object
 *
 * @param {number} code status of the response eg: 0 for success, any other number indicates error
 * @param {object} data data to be sent
 * @param {string} msg message
 * @param {object} error error object with valid error messages
 * @return {boolean | object} return true if success else return an object with error statements
*/
const response = (code = 1, data = {}, msg = '', error = {}) => {
  return { code, records: data, msg, error };
};

module.exports = { response };
