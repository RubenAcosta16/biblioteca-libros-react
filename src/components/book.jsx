import { Link } from "react-router-dom";

const book = ({item}) => {
    const bookContainerStyle={
        display:"flex",
        flexDirection:"column",
        width:"300px",
    }
    
    const bookInfoStyle={
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        textAlign:"center",
        
    }

    return <div style={bookContainerStyle}>
        <Link to={`/view/${item.id}`} style={bookInfoStyle}>
            <img src={item.cover} width="200px" alt={item.title} />
            <div>{item.title}</div>
        </Link>
    </div>;
}


export default book;