// // import React, { useState } from 'react';
// // import './ColorSlider.css';
// //
// // function ColorSlider() {
// //     const [colorScheme, setColorScheme] = useState(0);
// //
// //     // Kleurenschema's op basis van sliderwaarde
// //     const colorSchemes = [
// //         { background: '#f8f9fa', text: '#212529' }, // Licht
// //         { background: '#007bff', text: '#ffffff' }, // Blauw
// //         { background: '#28a745', text: '#ffffff' }, // Groen
// //         { background: '#ffc107', text: '#212529' }, // Geel
// //         { background: '#343a40', text: '#ffffff' }, // Donker
// //     ];
// //
// //     const handleSliderChange = (event) => {
// //         setColorScheme(Number(event.target.value));
// //     };
// //
// //     const currentScheme = colorSchemes[colorScheme];
// //
// //     return (
// //         <div
// //             className="profile-box"
// //             style={{
// //                 backgroundColor: currentScheme.background,
// //                 color: currentScheme.text,
// //             }}
// //         >
// //             <h1>Dynamic Color Slider</h1>
// //             <p>Adjust the slider to change the color scheme of this page.</p>
// //             <input
// //                 type="range"
// //                 min="0"
// //                 max="4"
// //                 name="color-slider"
// //                 value={colorScheme}
// //                 onChange={handleSliderChange}
// //             />
// //             <p>Current Scheme: {colorScheme}</p>
// //         </div>
// //     );
// // }
// //
// // export default ColorSlider;
//
// import React, { useState } from 'react';
// import './ImageResizer.css';
//
// function ImageResizer() {
//     const [size, setSize] = useState(100); // Standaard grootte in procenten
//
//     const handleSliderChange = (event) => {
//         setSize(Number(event.target.value)); // Pas grootte aan op basis van sliderwaarde
//     };
//
//     return (
//         <div className="profile-box">
//             <h1>Image Resizer</h1>
//             <p>Use the slider to resize the image below.</p>
//             <input
//                 type="range"
//                 min="50"
//                 max="200"
//                 name="image-slider"
//                 value={size}
//                 onChange={handleSliderChange}
//             />
//             <p>Current Size: {size}%</p>
//             <img
//                 src="https://via.placeholder.com/200"
//                 alt="Example"
//                 className="resizable-image"
//                 style={{
//                     width: `${size}%`,
//                     height: 'auto',
//                 }}
//             />
//         </div>
//     );
// }
//
// export default ImageResizer;
