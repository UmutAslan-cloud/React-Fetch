import React ,  {useState,useEffect} from 'react'
import PersonDetail from "./PersonDetail"
import PersonHeader from "./PersonHeader"
import './List.css';
export default function List() {

    const [list, setlist] = useState([]);

    useEffect (()=>{
        fetch('http://174.138.103.233/api/employees')
  .then(response => response.json())
  .then(data => setlist(data));
    }
    )

    return (
        <table>
            <PersonHeader/>
           {list.map(p => <PersonDetail person={p}/>)}
        </table>
    )
}
