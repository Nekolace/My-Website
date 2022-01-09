import '../MainCSS/HumbleBragSection.css';
import React from 'react';

//arrow import

import arrow from '../Assets/Images/arrow.png'
import arrowStraight from '../Assets/Images/arrowStraight.png'

//All the Image/Video imports
import TruthableImage from '../Assets/Images/Truthable.png';
import TruthableVideo from '../Assets/Images/Truthable.mp4';
import GlitchImage from '../Assets/Images/Glitch.png';
import GlitchVideo from '../Assets/Images/Glitch.mp4';
import GlitchMobileImage from '../Assets/Images/GlitchMobile.png';
import GlitchMobileVideo from '../Assets/Images/GlitchMobile.mp4'
import AuthpanelImage from '../Assets/Images/Authpanel.png';
import AuthpanelVideo from '../Assets/Images/Authpanel.mp4';
import AuthpanelMobileImage from '../Assets/Images/AuthpanelMobile.png';
import AuthpanelMobileVideo from '../Assets/Images/AuthpanelMobile.mp4';
import FluftzImage from '../Assets/Images/Fluftz.png';
import FluftzVideo from '../Assets/Images/Fluftz.mp4';
import FluftzMobileImage from '../Assets/Images/FluftzMobile.png';
import FluftzMobileVideo from '../Assets/Images/FluftzMobile.mp4';


export default class HumbleBragSection extends React.Component{


    //Setting up state for width and showcase state (if image or video)
    constructor(props){
        super(props);
        this.state={
            width: window.innerWidth,

            truthableImageShowcase: "flex",
            truthableVideoShowcase: "none",
            glitchImageShowcase: "flex",
            glitchVideoShowcase: "none",
            authpanelImageShowcase: "flex",
            authpanelVideoShowcase: "none",
            fluftzImageShowcase: "flex",
            fluftzVideoShowcase: "none",

            TruthableShowcase: TruthableImage,
            arrowImage: arrow,
            GlitchShowcase: GlitchImage,
            AuthpanelShowcase: AuthpanelImage,
            FluftzShowcase: FluftzImage
        };
    }


    //Checking for width via an event listener to know whether or not to show mobile images/gifs or desktop images/gifs)
    componentDidMount(){
        this.widthCheck();
        window.addEventListener('resize', this.widthCheck);
    }


    //width check function that runs on start/resize event
    widthCheck = () =>{
        this.setState({
            width: window.innerWidth
        })

        if(this.state.width < 700){
            this.setState({
                arrow: arrowStraight,
                GlitchShowcase: GlitchMobileImage,
                AuthpanelShowcase: AuthpanelMobileImage,
                FluftzShowcase: FluftzMobileImage
            })
        }

        if(this.state.width > 700){
            this.setState({
                arrow: arrow,
                GlitchShowcase: GlitchImage,
                AuthpanelShowcase: AuthpanelImage,
                FluftzShowcase: FluftzImage
            })
        }
    }


    //below are all the functions for checking for hover on images. Would've used
    // CSS but background-image property is absolutely awful for resizing.

    truthableHover =() =>{
        this.setState({
            TruthableShowcase: TruthableVideo,
            truthableVideoShowcase: "flex",
            truthableImageShowcase: "none"
        })
    }

    truthableUnhover =() =>{
        this.setState({
            TruthableShowcase: TruthableImage,
            truthableVideoShowcase: "none",
            truthableImageShowcase: "flex"
        })
    }

    glitchHover =() =>{
        if(this.state.width > 700){
            this.setState({
                GlitchShowcase: GlitchVideo,
                glitchVideoShowcase: "flex",
                glitchImageShowcase: "none"
            })
        }
        else{
            this.setState({
                GlitchShowcase: GlitchMobileVideo,
                glitchVideoShowcase: "flex",
                glitchImageShowcase: "none"
            })
        }
    }

    glitchUnhover=() =>{
        if(this.state.width > 700){
            this.setState({
                GlitchShowcase: GlitchImage,
                glitchVideoShowcase: "none",
                glitchImageShowcase: "flex"
            })
        }
        else{
            this.setState({
                GlitchShowcase: GlitchMobileImage,
                glitchVideoShowcase: "none",
                glitchImageShowcase: "flex"
            })
        }
    }

    authpanelHover =() =>{
        if(this.state.width > 700){
            this.setState({
                AuthpanelShowcase: AuthpanelVideo,
                authpanelVideoShowcase: "flex",
                authpanelImageShowcase: "none"
            })
        }
        else{
            this.setState({
                AuthpanelShowcase: AuthpanelMobileVideo,
                authpanelVideoShowcase: "flex",
                authpanelImageShowcase: "none"
            })
        }
    }

    authpanelUnhover =() =>{
        if(this.state.width > 700){
            this.setState({
                AuthpanelShowcase: AuthpanelImage,
                authpanelVideoShowcase: "none",
                authpanelImageShowcase: "flex"
            })
        }
        else{
            this.setState({
                AuthpanelShowcase: AuthpanelMobileImage,
                authpanelVideoShowcase: "none",
                authpanelImageShowcase: "flex"
            })
        }
    }

    fluftzHover =() =>{
        if(this.state.width > 700){
            this.setState({
                FluftzShowcase: FluftzVideo,
                fluftzVideoShowcase: "flex",
                fluftzImageShowcase: "none"
            })
        }
        else{
            this.setState({
                FluftzShowcase: FluftzMobileVideo,
                fluftzVideoShowcase: "flex",
                fluftzImageShowcase: "none"
            })
        }
    }

    fluftzUnhover=() =>{
        if(this.state.width > 700){
            this.setState({
                FluftzShowcase: FluftzImage,
                fluftzVideoShowcase: "none",
                fluftzImageShowcase: "flex"
            })
        }
        else{
            this.setState({
                FluftzShowcase: FluftzMobileImage,
                fluftzVideoShowcase: "none",
                fluftzImageShowcase: "flex"
            })
        }
    }



    render(){


        return(
            <div className='main-brag-container'>

                {/* Below are all the cards for detailing what I've done. This can most definitely be abstracted by using components,
                    but I figured since this is just a website with not much to hide, it would be easier just to stick to keeping it
                    as divs within this section. However, my dearest possible employers, I do know abstraction techniques and I would
                    be able to make components with props passed into them that would adjust the cards as necessary. Hire me whenever.  */}


                {/* Truthable Card */}

                <div className='first-card-container'>
                    <div className='card-text-container'>
                        <h1>Truthable</h1>
                        <div className='card-divider'/>
                        <h2>I was in charge of creating an entire mobile UI that was ready to launch! With a team of only two, it's not <em><b>TOO</b></em> shabby, eh?</h2>
                    </div>
                    <div className='card-showcase-container'>
                        <div className='card-showcase-vertical' onMouseOver={this.truthableHover} onMouseOut={this.truthableUnhover}>
                            <img className='showcase-image' style={{display: this.state.truthableImageShowcase}} src={this.state.TruthableShowcase} alt="Truthable"/>
                            <video className='showcase-video' style={{display: this.state.truthableVideoShowcase}} src={this.state.TruthableShowcase} alt="Truthable" autoPlay/>
                        </div>
                    </div>
                </div>  

                <div className='card-arrow-main-container'>
                    <div className='card-arrow-container'>
                        <img src={this.state.arrow} className='card-arrow' alt="Arrow"/>
                        <h1>Hover (or click, for you mobile users) here!</h1>
                    </div>
                </div>

                {/* Glitch Software Card */}

                <div className='card-container-right'>
                    <div className='card-text-container'>
                        <h1>Glitch Software</h1>
                        <div className='card-divider'/>
                        <h2>Using the provided designs, I brought this idea to life in the form of both a website and a responsive Electron & React powered Windows application. I believe it came out quite alright: Not a single <em><b>glitch</b></em>&nbsp;! </h2>
                    </div>
                    <div className='card-showcase-container-right'>
                        <div className='card-showcase-right' onMouseOver={this.glitchHover} onMouseOut={this.glitchUnhover}>
                            <img className='showcase-image' style={{display: this.state.glitchImageShowcase}} src={this.state.GlitchShowcase} alt="Glitch"/>
                            <video className='showcase-video' style={{display: this.state.glitchVideoShowcase}} src={this.state.GlitchShowcase} alt="Glitch" autoPlay/>
                        </div>
                    </div>
                </div>  

                {/* AuthPanel Card */}

                <div className='card-container'>
                    <div className='card-text-container'>
                        <h1>AuthPanel</h1>
                        <div className='card-divider'/>
                        <h2>I was given a design for a landing page. I <em><b>AUTH</b></em> orized myself to add my personal touch and responsiveness to the site.</h2>
                    </div>
                    <div className='card-showcase-container'>
                        <div className='card-showcase' onMouseOver={this.authpanelHover} onMouseOut={this.authpanelUnhover}>
                            <img className='showcase-image' style={{display: this.state.authpanelImageShowcase}} src={this.state.AuthpanelShowcase} alt="Authpanel"/>
                            <video className='showcase-video' style={{display: this.state.authpanelVideoShowcase}} src={this.state.AuthpanelShowcase} alt="Authpanel" autoPlay/>
                        </div>
                    </div>
                </div>  

                {/* Fluftz Card */}

                <div className='card-container-right'>
                    <div className='card-text-container'>
                        <h1>Fluftz</h1>
                        <div className='card-divider'/>
                        <h2>I created and executed my own design for a website that was used to advertise an up and coming NFT project on the Solana blockchain! I guess you could say I have <em><b>Non-Foilable Tenacity</b></em> !<em><br></br><br></br>In retrospect, that one wasn't very good. I'm still keeping it though.</em>  </h2>
                    </div>
                    <div className='card-showcase-container-right'>
                        <div className='card-showcase-right' onMouseOver={this.fluftzHover} onMouseOut={this.fluftzUnhover}>
                            <img className='showcase-image' style={{display: this.state.fluftzImageShowcase}} src={this.state.FluftzShowcase} alt="Fluftz"/>
                            <video className='showcase-video' style={{display: this.state.fluftzVideoShowcase}} src={this.state.FluftzShowcase} alt="Fluftz" autoPlay/>
                        </div>
                    </div>
                </div> 


            </div>
        )
    }

}