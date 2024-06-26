module.exports = {
    PORT: process.env.PORT || 3000,
    MONGO_URI: 'mongodb://mongo:27017/weather?directConnection=true',
    MONGO_URI_TEST: 'mongodb://localhost:27017',
    CORS_ORIGIN: 'http://localhost:5173',
    SERVER_URL: 'http://localhost:3000',
    JWT_SECRET: process.env.JWT_SECRET || 'secret'
  };
