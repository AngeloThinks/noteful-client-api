const PORT = process.env.PORT || 80;
const NODE_ENV = process.env.NODE_ENV || production;
const DB_URL = process.env.DATABASE_URL || 'postgresql://angelovazquez@localhost/noteful';

module.exports = { PORT, NODE_ENV, DB_URL }
