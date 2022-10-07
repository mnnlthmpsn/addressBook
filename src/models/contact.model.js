const getContactModel = (sequelize, { DataTypes }) => {
    const City = sequelize.define('contact', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        town_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notEmpty: true }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notEmpty: true }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notEmpty: true, isEmail: true }
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notEmpty: true }
        },

    })

    return City
}

module.exports = getContactModel