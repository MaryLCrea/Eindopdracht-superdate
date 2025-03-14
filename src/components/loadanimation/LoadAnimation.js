import React, {useEffect, useState} from 'react';
import './LoadAnimation.css';

const LoadAnimation = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <section className="loading-container">
            <section className="spinner-container">
                <section className="heart-pulse"></section>
            </section>
        </section>
    );
};

export default LoadAnimation;

