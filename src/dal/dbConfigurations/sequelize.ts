import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './src/dal/db/database.sqlite',
});

// async function syncDatabase() {
//   await sequelize.sync({ force: true });
//   console.log('Database synchronized');
// }

// syncDatabase();

export default sequelize;
