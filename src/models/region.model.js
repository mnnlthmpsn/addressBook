const getRegionModel = (sequelize, { DataTypes }) => {
    const Region = sequelize.define('region', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        region_title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: { notEmpty: true }
        },
        region_desc: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notEmpty: true }
        }
    })

    return Region
}

module.exports = getRegionModel