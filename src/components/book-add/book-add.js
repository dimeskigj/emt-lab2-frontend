import React from "react";
import { useNavigate } from 'react-router-dom';

const bookAdd = (props) => {
    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        name: "",
        copies: 1,
        category: "NOVEL",
        authorId: 1
    });

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        });
    };

    const onFormSubmit = (e) => {
        e.preventDefault();

        const name = formData.name;
        const copies = formData.copies;
        const category = formData.category;
        const authorId = formData.authorId;

        props.addBook({
            name: name,
            copies: copies,
            category: category,
            authorId: authorId
        });
        
        navigate("/books");
    };

    return (
        <div className={"d-flex flex-column align-items-center justify-content-center container-fluid mt-5"}>
            <form>
                <div className="form-group mt-2">
                    <label htmlFor="name">Book title</label>
                    <input type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Enter book title"
                        required
                        onChange={handleChange}
                    ></input>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="copies">Available copies</label>
                    <input type="number"
                        className="form-control"
                        id="copies"
                        name="copies"
                        placeholder="Enter number of copies"
                        required
                        onChange={handleChange}
                    ></input>
                </div>
                <div className="form-group mt-2">
                    <label>Select Category</label>
                    <select name="category" className="form-control" onChange={handleChange}>
                        {props.categories.map((item) => {
                            return (
                                <option value={item}>{item}</option>
                            );
                        })}
                    </select>
                </div>
                <div className="form-group mt-2">
                    <label>Select Author</label>
                    <select name="authorId" className="form-control" onChange={handleChange}>
                        {props.authors.map((item) => {
                            return (
                                <option value={item.id}>{item.name + ' ' + item.surname}</option>
                            );
                        })}
                    </select>
                </div>
                <button onClick={onFormSubmit} type="submit" className="btn btn-primary w-100 mt-2">Submit</button>
            </form>
        </div>
    );
};

export default bookAdd;