import React, { useEffect, Component } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import BookService from '../../service/bookService';

class bookEdit extends Component {
    navigate = useNavigate();
    formData = {
        name: "",
        copies: 0,
        category: "NOVEL",
        authorId: 0
    };

    useEffect = (() => {
        const { id } = useParams();
        BookService.getBook(id).then((data) => {
            console.log(data);
            this.props.book = data.data;
        });
    });

    handleChange = (e) => {
        this.formData = {
            ...this.formData,
            [e.target.name]: e.target.value.trim()
        };
    };

    onFormSubmit = (e) => {
        e.preventDefault();

        const name = this.formData.name !== "" ? this.formData.name : this.props.book.name;
        const copies = this.formData.copies !== 0 ? this.formData.copies : this.props.book.copies;
        const category = this.formData.category !== "" ? this.formData.category : this.props.book.category;
        const authorId = this.formData.authorId !== 0 ? this.formData.authorId : this.props.book.author.id;

        this.props.editBook({
            id: this.props.book.id,
            name: name,
            copies: copies,
            category: category,
            authorId: authorId
        });

        this.navigate("/books");
    };

    render() {
        return (
            <div className={"d-flex flex-column align-items-center justify-content-center container-fluid mt-5"}>
                <form>
                    <div className="form-group mt-2">
                        <label htmlFor="name">Book title</label>
                        <input type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder={this.props.book.name}
                            required
                            onChange={this.handleChange}
                        ></input>
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="copies">Available copies</label>
                        <input type="number"
                            className="form-control"
                            id="copies"
                            name="copies"
                            placeholder={this.props.book.copies}
                            required
                            onChange={this.handleChange}
                        ></input>
                    </div>
                    <div className="form-group mt-2">
                        <label>Select Category</label>
                        <select name="category" className="form-control" onChange={this.handleChange}>
                            {this.props.categories.map((item) => {
                                if (this.props.book.category !== undefined && this.props.book.category == item) {
                                    return (
                                        <option value={item} selected={item}>{item}</option>
                                    );
                                } else {
                                    return (
                                        <option value={item}>{item}</option>
                                    );
                                }
                            })}
                        </select>
                    </div>
                    <div className="form-group mt-2">
                        <label>Select Author</label>
                        <select name="authorId" className="form-control" onChange={this.handleChange}>
                            {this.props.authors.map((item) => {
                                if (this.props.book.author !== undefined && this.props.book.author.id == item.id) {
                                    return (
                                        <option value={item.id} selected={item.id}>{item.name + ' ' + item.surname}</option>
                                    );
                                } else {
                                    return (
                                        <option value={item.id}>{item.name + ' ' + item.surname}</option>
                                    );
                                }
                            })}
                        </select>
                    </div>
                    <button onClick={this.onFormSubmit} type="submit" className="btn btn-primary w-100 mt-2">Submit</button>
                </form>
            </div>
        );
    }
};

export default bookEdit;