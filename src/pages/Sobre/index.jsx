import { Link } from "react-router-dom";
import './Sobre.css';

function Sobre(){
    return(
        <div>
            <h1>sobre</h1>
            <Link to='/'>Home</Link>
            <Link to='/ods'>ODS</Link>
        </div>
    );
}

export default Sobre;