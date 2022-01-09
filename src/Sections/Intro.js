import '../MainCSS/Intro.css';
import React from 'react';
import linkedin from '../Assets/Images/linkedin.png'
import email from '../Assets/Images/email.png'
import scroller from '../Assets/Images/scroller.png'

export default class Intro extends React.Component{
  redirectToLinkedIn(){
    window.open("https://www.linkedin.com/in/nicholas--dimeglio")
  }
  redirectToMail(){
    window.open("mailto:nickyd528@aol.com")
  }


    render(){
        return(
            <div className="main-container">

              {/* landing screen*/}

              <div className='intro-container'>
    
                <div className='intro-text'>
                  <h1>hey</h1>
                  <h1>i'm nicholas</h1>
                  <h1>but you can call me nick</h1>
                </div>
      
                <div className='intro-blurb'>
                  <h2 className='constant-blurb'>I make&nbsp;</h2>
                  <h2><span class='blurb-dynamic-text'>mistak</span></h2>
                  <h2><span class='blurb-dynamic-text2'>erro</span></h2>
                  <h3><span class='blurb-dynamic-text3'>Failed to compile: Synta</span></h3>
                  <h2><span class='blurb-dynamic-text4'>good stuff :)</span></h2>
                </div>

                <div className='intro-interactable-container'>
                  <div className='linkedin-container' onClick={this.redirectToLinkedIn}>
                    <img src={linkedin} className='linkedin' alt='welp... this did not load. This is unfortunate.'/>
                  </div>
                  <div className='linkedin-container' onClick={this.redirectToMail}>
                    <img src={email} className='linkedin' alt='welp... this did not load. This is unfortunate.'/>
                  </div>
                </div>

                <div className='intro-bottom-scroller'>
                  <div className='scroller-text-container'>
                    <h2>Scroll on down for my greatest hits!</h2>
                    <h3>Hover (or click, if on mobile) on the images to make them come to life and show you an animated preview!</h3>
                  </div>
                  <div className='floating-scroller-container'>
                    <img className='floating-scroller' src={scroller} alt='welp... this did not load. This is unfortunate.'/>
                  </div>
                </div>
    
            </div>

          {/* end of the intro; beginning of the display section */}

          </div>
        )
    }
}