import { Link } from "react-router-dom";

const navbar = () => {
    return <div>
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
    </div>;
}

export default navbar;