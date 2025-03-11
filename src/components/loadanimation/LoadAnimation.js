import React, { useState, useEffect } from 'react';
import './LoadAnimation.css';

const LoadingAnimation = () => {
    const [loading, setLoading] = useState(true);

      useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="loading-container">
            {loading ? (
                <section className="spinner-container">
                    <section className="heart-pulse"></section>
                </section>
            ) : null}
        </section>
    );
};

export default LoadingAnimation;
