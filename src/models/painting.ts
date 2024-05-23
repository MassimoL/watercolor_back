import db from '../db/connection';
import { DataTypes } from 'sequelize';

const Painting = db.define('paintings', {
    id: {
        type: DataTypes.NUMBER,
        primaryKey: true
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


