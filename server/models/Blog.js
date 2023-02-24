const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {}
  Blog.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      content: { type: DataTypes.STRING, allowNull: false },
      date: { type: DataTypes.STRING },
    },
    {
      sequelize,
    }
  );
  return Blog;
};
