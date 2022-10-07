const getCityModel = (sequelize, { DataTypes }) => {
    const City = sequelize.define('city', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        region_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        city_title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notEmpty: true }
        },
        city_desc: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notEmpty: true }
        },

    })

    return City
}

module.exports = getCityModel