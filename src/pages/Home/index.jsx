import { Link } from "react-router-dom";
import './Home.css';

function Home(){
    return(
        <div>
            <h1 className="text-sky-400">home</h1>
            <Link to='/ods' className="inline-block">ODS</Link>
            <Link to='/sobre'>Sobre</Link>
        </div>
    );
}

export default Home;