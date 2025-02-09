import React, {useState} from 'react';

function PicaSlider({minRange, maxRange, labelText, nameAttribuut, imageUrl}) {
    const [size, setSize] = useState(500);

    const handleSliderChange = (event) => {
        const newSize = Number(event.target.value);
        setSize(newSize);
    };

    return (
        <div>
            <label htmlFor={nameAttribuut}>
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
            />
            <div>
                <img
                    src={imageUrl}
                    alt="Dynamic size"
                    style={{
                        width: `${size}px`,
                        height: 'auto',
                        transition: 'width 0.3s ease',
                    }}
                />
            </div>
        </div>
    );
}

export default PicaSlider;