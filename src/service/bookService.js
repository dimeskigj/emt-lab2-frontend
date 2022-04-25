import axios from "../custom-axios/axios";

const BookService = {
    listBooks: () => {
        return axios.get("/book/all");
    },
    listCategories: () => {
        return axios.get("/book/categories");
    },
    listAuthors: () => {
        return axios.get("/author/all");
    },
    getBook: (id) => {
        return axios.get(`/book/get/${id}`)
    },
    addBook: (book) => {
        return axios.post("/book/add", book);
    },
    editBook: (book) => {
        return axios.put("/book/edit", book);
    },
    deleteBook: (id) => {
        return axios.delete(`book/delete/${id}`);
    },
    takeBook: (id) => {
        return axios.get(`book/take/${id}`);
    },
};

export default BookService;