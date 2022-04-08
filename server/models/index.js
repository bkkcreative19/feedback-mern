const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  logging: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.feedbacks = require("./feedback.model")(sequelize, Sequelize);
db.users = require("./user.model")(sequelize, Sequelize);
db.comments = require("./comment.model")(sequelize, Sequelize);
db.replies = require("./reply.model")(sequelize, Sequelize);
// db.repliesToReplies = require("./replyToReply")(sequelize, Sequelize);

db.feedbacks.hasMany(db.comments, {
  foreignKey: {
    name: "feedback_id",
  },
});
db.users.hasMany(db.comments, {
  foreignKey: {
    name: "user_id",
  },
});
db.users.hasMany(db.replies, {
  foreignKey: {
    name: "user_id",
  },
});

db.comments.belongsTo(db.users, { foreignKey: "user_id" });
db.replies.belongsTo(db.users, { foreignKey: "user_id" });

db.comments.hasMany(db.replies, { foreignKey: "comment_id" });
// db.replies.hasMany(db.repliesToReplies, { foreignKey: "reply_id" });

module.exports = db;
