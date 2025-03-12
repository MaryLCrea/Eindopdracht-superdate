import React from 'react';

function CondiCard({ title, children }) {

        return (
        <article className="article-card">
            <h5>{title}</h5>
            {children}
        </article>
    );
}

export default CondiCard;

