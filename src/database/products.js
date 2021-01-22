module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define(
        "product",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            brand: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING(100000),
                allowNull: false,
            },
            imgurl: {
                type: DataTypes.STRING(500),
                allowNull: false,
            },
            price: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            category: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        { timestamps: true }
    );
    Products.associate = (models) => {
        Products.hasMany(models.Review); //ONE-TO-MANY: ARTICLE IS ONE, REVIEW IS MANY
    };
    return Products;
};