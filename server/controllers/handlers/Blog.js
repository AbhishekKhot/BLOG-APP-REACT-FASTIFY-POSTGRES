const HTTPStatus = require("../../lib/HTTPStatus");
const BlogService = require("../../services/Blog.js");

async function getBlogHandler(request, reply) {
  const blog = await BlogService.getBlog(request.params);
  reply.status(HTTPStatus.OK.code).send({ blog });
}

async function getAllBlogsHandler(request, reply) {
  const blog = await BlogService.getAllBlogs();
  reply.status(HTTPStatus.OK.code).send({ blog });
}

async function addBlogHandler(request, reply) {
  await BlogService.addBlog(request.body);
  reply
    .status(HTTPStatus.CREATED.code)
    .send({ message: "blog added successfully" });
}

async function deleteBlogHandler(request, reply) {
  await BlogService.removeBlog(request.params);
  reply
    .status(HTTPStatus.OK.code)
    .send({ message: "note deleted successfully" });
}

async function updateBlogHandler(request, reply) {
  await BlogService.updateBlog(request.params, request.body);
  reply
    .status(HTTPStatus.OK.code)
    .send({ message: "note updated successfully" });
}

module.exports = {
  getBlogHandler,
  getAllBlogsHandler,
  addBlogHandler,
  updateBlogHandler,
  deleteBlogHandler,
};
