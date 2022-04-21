import sequelize from "../index.js";

import s from "sequelize";

const { DataTypes } = s;

const MovieCategory = sequelize.define("movieCategory", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
}, {
    timestamps: false,
});

export default MovieCategory;