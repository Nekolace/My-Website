import '../MainCSS/HumbleBragSection.css';
import React from 'react';


export default class HumbleBragSection extends React.Component{

    render(){
        return(
            <div className='main-brag-container'>

                {/* Below are all the cards for detailing what I've done. This can most definitely be abstracted by using components,
                    but I figured since this is just a website with not much to hide, it would be easier just to stick to keeping it
                    as divs within this section. However, my dearest possible employers, I do know abstraction techniques and I would
                    be able to make components with props passed into them that would adjust the cards as necessary. Hire me whenever.  */}


                {/* Truthable Card */}

                <div className='card-container'>
                    <div className='card-text-container'>
                        <h1>Truthable</h1>
                        <div className='card-divider'/>
                        <h2>I was in charge of creating an entire mobile UI that was ready to launch! With a team of only two, it's not <em><b>TOO</b></em> shabby, eh?</h2>
                    </div>
                    <div className='card-showcase-container'>
                        <div className='card-showcase'>

                        </div>
                    </div>
                </div>  

                {/* Glitch Software Card */}

                <div className='card-container-right'>
                    <div className='card-text-container'>
                        <h1>Glitch Software</h1>
                        <div className='card-divider'/>
                        <h2>Using the provided designs, I brought this idea to life. I believe it came out quite alright: Not a single <em><b>glitch</b></em> ! </h2>
                    </div>
                    <div className='card-showcase-container-right'>
                        <div className='card-showcase-right'>

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
                        <div className='card-showcase'>

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
                        <div className='card-showcase-right'>

                        </div>
                    </div>
                </div> 


            </div>
        )
    }

}