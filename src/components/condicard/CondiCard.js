import React from 'react';

function CondiCard(props) {
    console.log(props);
    return(
        <article className="article-card">
            <h5>{props.title}</h5>
            {props.children}
        </article>
    )
}

export default CondiCard;