import React from 'react';

function CondiCard({ title, children }) {

        return (
        <header className="article-card">
            <h5>{title}</h5>
            {children}
        </header>
    );
}

export default CondiCard;

