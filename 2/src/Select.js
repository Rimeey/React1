import "./select.scss";
import citys from "./Citys";
import { Component } from "react";

export default class Select extends Component {
    render() {
        return (
            <ul>
                {citys.map(elem => 
                <li 
                key={elem.id} 
                onClick={()=>this.props.setDesc(citys[elem.id])}
                >{elem.name}</li>
                )}
            </ul>
        )
    }
}