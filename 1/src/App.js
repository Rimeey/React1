import Select from "./Select";
import Description from "./Description";
import {useState} from 'react';

export default function App() {
  const [desc, setDesc] = useState(null);
  return (
    <>
    <Select desc = {desc} setDesc = {setDesc}/>
    <Description desc = {desc}/>
    </>
  );
}