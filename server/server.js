const fastify = require("fastify")({ logger: true });
const db = require("./models");

const env = process.env.NODE_ENV || "development";
if (env === "development") require("dotenv").config();
const PORT = process.env.port || 5000;

fastify.register(require("./routes/Blog"), { prefix: "/blogs" });

const start = async () => {
  try {
    await fastify.listen({ port: PORT });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

db.sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Synced successfully with database");
    start();
  })
  .catch((error) => {
    console.log("some error occured while connecting to DB", error);
  });
