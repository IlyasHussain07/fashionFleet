import "./NavigationProduct.css"
import { Link } from "react-router-dom"
export default function Products({ home, type, place }) {
    return (
        <div>
            <div className="navigation">
                <p>
                    <Link to='/' style={{ textDecoration: "none", color: "#000" }}><span>{home}</span></Link>
                    <span>{type}</span>
                    <span>{place}</span>
                    Showing Products
                </p>
            </div>
        </div>
    )
}