module.exports = (sequelize, DataTypes) => {
  const Retailer = sequelize.define(
    "Retailer",
    {
      retailer_address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contact_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      line1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      line2: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      line3: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "retailers",
      timestamps: true,
    }
  );

  return Retailer;
};
