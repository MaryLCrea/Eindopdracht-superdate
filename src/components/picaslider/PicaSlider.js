import React, {useState} from 'react';
import './PicaSlider.css';

function PicaSlider({
                        minRange = 100,
                        maxRange = 1000,
                        labelText = "Resize your image here",
                        nameAttribuut = "slider",
                        imageUrl,
                        onSizeChange,
                    }) {
    const [size, setSize] = useState(500);

    const handleSliderChange = (event) => {
        const newSize = Number(event.target.value);
        setSize(newSize);

        if (onSizeChange) {
            onSizeChange(newSize);
        }
    };

    return (
        <section className="pica-slider-container">
            <label htmlFor={nameAttribuut} className="pica-slider-label">
                {labelText}
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
