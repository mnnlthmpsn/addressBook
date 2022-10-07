const getTownModel = (sequelize, { DataTypes }) => {
    const Town = sequelize.define('town', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        city_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        town_title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notEmpty: true }
        },
        town_desc: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notEmpty: true }
        },

    })

    return Town
}

module.exports = getTownModel