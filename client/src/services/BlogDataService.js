import http from "../common.js";

class BlogsDataServices {
  getAll() {
    return http.get("");
  }

  getById(id) {
    return http.get("/" + `${id}`);
  }

  create(data) {
    return http.post("/addBlog", data);
  }

  update(id, data) {
    return http.put(`/edit/${id}`, data);
  }

  delete(id) {
    return http.delete(`/remove/${id}`);
  }

  findByTitle(title) {
    return http.get(`/?title=${title}`);
  }
}

export default new BlogsDataServices();
