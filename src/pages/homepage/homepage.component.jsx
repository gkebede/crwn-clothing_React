import React from 'react';

import Directory from '../../components/directory/directory.component';
// import './homepage.style.scss';
import { HomePageContainer } from './homepage.styles';

const HomePage = (props) => {
   // console.log(props)
    return(
        // <div className="homepage">
        //         <Directory />
        // </div>
        <HomePageContainer>
            <Directory />
        </HomePageContainer>
    )
}

export default HomePage;