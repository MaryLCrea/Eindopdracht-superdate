import {Link} from "react-router-dom";
import React from "react";

function HomeLink() {

    return(
        <>
        <Link to="/" className="home-link">⬅ Back to Home</Link>
        </>
    );
}

export default HomeLink;