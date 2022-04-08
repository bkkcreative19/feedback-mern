module.exports = (sequelize, Sequelize) => {
  const Reply = sequelize.define("Reply", {
    reply_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    content: {
      type: Sequelize.STRING,
    },
  });

  return Reply;
};
