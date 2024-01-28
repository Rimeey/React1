import './description.scss';
import { Component } from "react";

export default class Description extends Component {
    render() {
        return (
            <>
                <div className="description">
                    <div key={this.props.desc.id}>
                        <img src={this.props.desc.url} alt={this.props.desc.name} />
                        <h1>{this.props.desc.name}</h1>
                        <p>{this.props.desc.description}</p>
                    </div>
                </div>
            </>
        )
    }
}