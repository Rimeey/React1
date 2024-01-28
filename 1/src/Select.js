import "./select.scss";
import citys from "./Citys";

export default function Select({setDesc}) {
    return (
        <ul>
            {citys.map(elem => 
            <li 
            key={elem.id} 
            onClick={()=>setDesc(citys[elem.id])}
            >{elem.name}</li>
            )}
        </ul>
    )
}