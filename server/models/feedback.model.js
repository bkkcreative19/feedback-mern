module.exports = (sequelize, Sequelize) => {
  const Feedback = sequelize.define("Feedback", {
    feedback_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
    },
    category: {
      type: Sequelize.STRING,
    },
    upvotes: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    status: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
  });

  return Feedback;
};
