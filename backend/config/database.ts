export default {
  host: process.env.DB_HOST || '',
  port: process.env.DB_PORT || '',
  name: process.env.DB_NAME || '',
  user: process.env.DB_USER || '',
  password: process.env.DB_USER_PASSWORD || '',
  schema: process.env.DB_SCHEMA || '',
  testDbName: process.env.TEST_DB_NAME || '',
};
