const db = require("../models");
const { NotFoundError } = require("../lib/serverErros");

class BlogService {
  async getBlog(params) {
    const blog = await db.Blog.findByPk(params.id);
    if (!blog) throw new NotFoundError("Blog not found with id " + params.id);
    return blog;
  }

  async getAllBlogs() {
    return db.Blog.findAll();
  }

  async addBlog(body) {
    const blog = {
      title: body.title,
      content: body.content,
      date: new Date().toLocaleDateString(),
    };
    return db.Blog.create(blog);
  }

  async updateBlog(params, body) {
    const blog = await db.Blog.findByPk(params.id);
    if (!blog) throw new NotFoundError("Blog  not found with id " + params.id);
    return await db.Blog.update(body, {
      where: { id: params.id },
    });
  }

  async removeBlog(params) {
    const blog = await db.Blog.findByPk(params.id);
    if (!blog) throw new NotFoundError("Blog  not found with id " + params.id);
    return await db.Blog.destroy({
      where: { id: params.id },
    });
  }
}

module.exports = new BlogService();
