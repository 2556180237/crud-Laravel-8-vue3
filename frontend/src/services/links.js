import http from "../http";

class links {
    getAll() {
        return http.get("/notes");
    }

    get(id) {
        return http.get(`/notes/${id}`);
    }

    create(data) {
        return http.post("/notes", data);
    }

    update(id, data) {
        return http.put(`/notes/${id}`, data);
    }

    delete(id) {
        return http.delete(`/notes/${id}`);
    }
}

export default new links();