module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define(
        "category",
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
            imageurl: {
                type: DataTypes.STRING(200),
                allowNull: false,
            }
        },
        { timestamps: true }
    );
    Category.associate = (models) => {
        Category.hasMany(models.Products); //category belongs to a single product
    };
    return Category;
};