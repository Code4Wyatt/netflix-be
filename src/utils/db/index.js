import Sequelize from "sequelize";

const { HEROKU_URI } = process.env;

const sequelize = new Sequelize(HEROKU_URI, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
});

export const connectDB = async () => {
    try {
        await sequelize.authenticate({ logging: false });
        console.log("Database is authenticated.");
        await sequelize.sync({ force: true });
        console.log("Database connection established!");
    } catch (error) {
        console.log("Failed to authenticate", error);
    }
};

export default sequelize;