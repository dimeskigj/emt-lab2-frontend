import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const books = (props) => {
    return (
        <div className={"d-flex flex-column align-items-center justify-content-center container-fluid mt-5"}>
            <table className={"table table-hover table-bordered table-responsive table-sm table-striped w-auto"}>
                <thead>
                    <tr>
                        <th scope={"col"}>#</th>
                        <th scope={"col"}>Title</th>
                        <th scope={"col"}>Author</th>
                        <th scope={"col"}>Category</th>
                        <th scope={"col"}>Available copies</th>
                        <th scope={"col"}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.books.map((item, i) => {
                        return (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.author.name + ' ' + item.author.surname}</td>
                                <td>{item.category}</td>
                                <td>{item.copies}</td>
                                <td>
                                    <a
                                        className={'btn btn-primary mx-1'}
                                        title={'take'}
                                        onClick={() => { props.take(item.id); }}

                                    >take</a>
                                    {/* <Link
                                        className={'btn btn-primary mx-1'}
                                        // onClick={() => { props.fetch(item.id); }}
                                        to={`/books/edit/${item.id}`} >edit</Link> */}
                                    <a
                                        className={'btn btn-danger mx-1'}
                                        title={'delete'}
                                        onClick={() => { props.delete(item.id); }}
                                    >delete</a>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <Link className={"btn btn-primary mb-3"} to={'/books/add'}>add new book</Link>
        </div>
    );
};

export default books;