import sequelize from "../index.js";
import s from "sequelize";

const { DataTypes } = s;

const User = sequelize.define('User', {
    user_id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

export default User;
