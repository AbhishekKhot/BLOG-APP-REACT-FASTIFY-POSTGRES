const Blog = {
  type: "object",
  properties: {
    title: { type: "string" },
    content: { type: "string" },
    date: { type: "string" },
  },
};

const addBlogSchema = {
  body: {
    type: "object",
    properties: {
      title: { type: "string" },
      content: { type: "string" },
    },
  },
  required: ["text", "content"],
};

const getBlogsSchema = {
  schema: {
    response: {
      200: {
        type: "array",
        notes: Blog,
      },
    },
  },
};

const getBlogSchema = {
  schema: {
    response: {
      200: Blog,
    },
  },
};

const updateBlogSchema = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
    },
  },
};

const deleteBlogSchema = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
    },
  },
};

module.exports = {
  addBlogSchema,
  getBlogSchema,
  getBlogsSchema,
  updateBlogSchema,
  deleteBlogSchema,
};
