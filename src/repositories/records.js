/*
* Author: Nikhil Unni <nikhi.unni@gmail.com>
* Created Date: Tuesday November 2nd 2021
* Version : 1.0.0
* Product : Database connection
*/

/**
 * Returns records from the database
*/
module.exports.findAllRecords = async (db, options) => {
  const recordCollection = db.collection('records');
  const { startDate, endDate, minCount, maxCount } = options;
  return await recordCollection.aggregate([{
    "$match": {
      createdAt: {
        $gte: new Date(startDate),
        $lt: new Date(endDate)
      }
    },
  },
  {
    "$project": {
      key: 1,
      createdAt: 1,
      totalCount: { $sum: "$counts" },
      _id: 0
    }
  },
  {
    $match: {
      totalCount: {
        $gte: minCount,
        $lte: maxCount
      }
    }
  }
  ]).toArray();
}