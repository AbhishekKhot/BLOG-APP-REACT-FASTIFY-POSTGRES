const {
  getBlogHandler,
  getAllBlogsHandler,
  addBlogHandler,
  deleteBlogHandler,
  updateBlogHandler,
} = require("../controllers/handlers/Blog");

const {
  getBlogSchema,
  getBlogsSchema,
  deleteBlogSchema,
  updateBlogSchema,
  addBlogSchema,
} = require("../controllers/schema/Blog");

module.exports = (fastify, option, done) => {
  fastify.post("/addBlog", {
    schema: addBlogSchema,
    handler: addBlogHandler,
  });
  fastify.get("/:id", {
    schema: getBlogSchema,
    handler: getBlogHandler,
  });
  fastify.get("/", {
    schema: getBlogsSchema,
    handler: getAllBlogsHandler,
  });
  fastify.put("/edit/:id", {
    schema: updateBlogSchema,
    handler: updateBlogHandler,
  });
  fastify.delete("/remove/:id", {
    schema: deleteBlogSchema,
    handler: deleteBlogHandler,
  });
  done();
};
