module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define("Comment", {
    comment_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    content: {
      type: Sequelize.STRING,
    },
  });

  return Comment;
};
