import '../MainCSS/Home.css';
import React from 'react';
import Intro from '../Sections/Intro'
import HumbleBragSection from '../Sections/HumbleBragSection';
import Footer from '../Sections/Footer';

export default class Home extends React.Component{


    render(){
        return(
          <div className='home-container'>
            <Intro/>
            <HumbleBragSection/>
            <Footer/>
          </div>
        )
    }
}