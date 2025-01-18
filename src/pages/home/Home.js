import React from 'react';
import './Home.css';
import homepicture from '../../assets/wood.jpg';
import TopMenu from "../../components/topmenu/TopMenu";
import LoginField from "../../components/loginfield/LoginField";


function Home() {
    return (
        <>
            <TopMenu/>
            <LoginField/>
            <div className="outerpage-container">
                <img src={homepicture} className="home-picture" alt="home-picture"/>
                </div>
                </>
    );
}

export default Home;














// import React from 'react';
// import './Home.css';
// import homepicture from '../../assets/wood.jpg';
// import TopMenu from "../../components/topmenu/TopMenu";
// import LoginField from "../../components/loginfield/LoginField";
//
//
// function Home() {
//     return (
//         <>
//             <TopMenu/>
//             <LoginField/>
//             <div className="outerpage-container">
//                 <img src={homepicture} className="home-picture" alt="home-picture"/>
//             </div>
//         </>
//     );
// }
//
// export default Home;