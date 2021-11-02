module.exports.config = () => {
  return {
    database: process.env.DB_NAME,
    mongo_url: process.env.MONGO_URL
  }
};
