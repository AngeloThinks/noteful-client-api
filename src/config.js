const PORT = process.env.PORT || 8000;
const NODE_ENV = process.env.NODE_ENV || production;
const DB_URL = process.env.DB_URL || 'postgresql://angelovazquez@localhost/noteful';

module.exports = { PORT, NODE_ENV, DB_URL }
