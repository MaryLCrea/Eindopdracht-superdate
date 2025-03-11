import React, { useState } from 'react';
import './PicaSlider.css'; // Voeg de CSS-import toe

function PicaSlider({ minRange, maxRange, labelText, nameAttribuut, imageUrl }) {
    const [size, setSize] = useState(500);

    const handleSliderChange = (event) => {
        const newSize = Number(event.target.value);
        setSize(newSize);
    };

    return (
        <section className="pica-slider-container">
            <label htmlFor={nameAttribuut} className="pica-slider-label">
                {labelText} Resize your image here
            </label>
            <input
                type="range"
                id={nameAttribuut}
                name={nameAttribuut}
                min={minRange}
                max={maxRange}
                value={size}
                onChange={handleSliderChange}
                className="pica-slider-input"
            />
            <section className="pica-slider-img-container">
                <img
                    src={imageUrl}
                    alt="Dynamic size"
                    className="pica-slider-img"
                    style={{
                        width: `${size}px`,
                    }}
                />
            </section>
        </section>
    );
}

export default PicaSlider;
