module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define(
        "review",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            comment: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            rate: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    min: 1,
                    max: 5
                }
            },
        },
        { timestamps: true }
    );
    Review.associate = (models) => {
        Review.belongsTo(models.Products); //ONE-TO-MANY: REVIEW IS MANY, ARTICLE IS ONE
    };
    return Review;
};