import { Link } from "react-router-dom";
import './Ods.css';

function Ods(){
    return(
        <div>
            <h1>ods</h1>
            <Link to='/'>Home</Link>
            <Link to='/sobre'>Sobre</Link>
        </div>
    );
}

export default Ods;