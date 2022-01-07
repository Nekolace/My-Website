import '../MainCSS/Home.css';
import React from 'react';
import Intro from '../Sections/Intro'
import HumbleBragSection from '../Sections/HumbleBragSection';

export default class Home extends React.Component{


    render(){
        return(
          <div>
            <Intro/>
            <HumbleBragSection/>
          </div>
        )
    }
}