import Navbar from "./navbar"

const layout = ({children}) => {
    return <div>
        <Navbar></Navbar>
        <div>{children}</div>
    </div>;
}

export default layout;