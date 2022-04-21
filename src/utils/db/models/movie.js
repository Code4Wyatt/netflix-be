import sequelize from "../index.js";
import s from "sequelize";

const { DataTypes } = s;

const Movie = sequelize.define('Movie', {
    movie_id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

export default Movie;
