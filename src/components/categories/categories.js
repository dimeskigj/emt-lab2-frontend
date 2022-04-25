import React from "react";

const categories = (props) => {
    return (
        <div className={"d-flex align-items-center justify-content-center container-fluid mt-5"}>
            <table className={"table table-hover table-responsive table-sm table-striped w-25"}>
                <thead>
                    <tr>
                        <th scope={"col"}>#</th>
                        <th scope={"col"}>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {props.categories.map((item, i) => {
                        return (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{item}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default categories;