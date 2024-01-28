import './description.scss';
import { Component } from "react";

export default class Description extends Component{
    render() {
        return (
            <div className="description">
                <img src='./pic/book.jpg' alt='' />
                <h1>Книга The One Device</h1>
            </div>
        );
    }
}