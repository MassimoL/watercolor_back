import db from '../db/connection';
import { DataTypes } from 'sequelize';

const Painting = db.define('paintings', {
    painting_id: {
        type: DataTypes.NUMBER,
    },
    description: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
    },
    author: {
        type: DataTypes.STRING,
    },
    year: {
        type: DataTypes.STRING,
    },

}, {
    createdAt: false,
    updatedAt: false,
});

export default Painting;