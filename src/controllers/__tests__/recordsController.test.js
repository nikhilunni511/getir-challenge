const { getRecords } = require('../recordsController');

describe("Check method \'recordsController\' ", () => {
  const mockResponse = () => {
    const res = {}
    res.send = jest.fn().mockReturnValue(res)
    res.status = jest.fn().mockReturnValue(res)
    res.json = jest.fn().mockReturnValue(res)
    return res
  };
  const mockRequest = () => {
    const req = {}
    req.body = jest.fn().mockReturnValue(req)
    req.params = jest.fn().mockReturnValue(req)
    return req
  };

  test('should 200 and return correct value', async () => {
    let req = mockRequest();
    req.body = {
      "startDate": "2016-12-24",
      "endDate": "2017-01-29",
      "minCount": 179,
      "maxCount": 310
    }
    const outData = {
      "code": 0,
      "records": [
        {
          "key": "TAKwGc6Jr4i8Z487",
          "createdAt": "2017-01-28T01:22:14.398Z",
          "totalCount": 310
        },
        {
          "key": "XlqCuHpo",
          "createdAt": "2016-12-27T15:33:59.004Z",
          "totalCount": 179
        }
      ],
      "msg": "Success",
      "error": {}
    }

    const res = mockResponse();

    await getRecords(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
  });

  test('should 422 and return error with code 1', async () => {
    let req = mockRequest();
    req.body = {};
    const res = mockResponse();

    await getRecords(req, res);
    expect(res.status).toHaveBeenCalledWith(422);
  });
});