const { validateRequest } = require('../validation');

describe('Testing validation utilities', () => {
  test('It should return true for valid input', () => {
    const inData = {
      "startDate": "2016-12-24",
      "endDate": "2017-01-29",
      "minCount": 179,
      "maxCount": 310
    }
    expect(validateRequest(inData)).toBe(true);
  });
  test('It should return error object for invalid input', () => {
    const inData = {
      "startDate": "2016-12-24",
      "endDate": "2017-01-29",
      "minCount": "179",
      "maxCount": 310
    }
    const outData = {
      "error": true,
      "startDate": [],
      "endDate": [],
      "minCount": [
        "minCount must be of type number"
      ],
      "maxCount": []
    }
    const response = validateRequest(inData);
    expect(response.error).toBe(true);
    expect(response).toMatchObject(outData);
  });
})