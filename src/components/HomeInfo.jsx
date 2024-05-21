import React from 'react';
import {Link} from 'react-router-dom';
import {arrow} from '../assets/icons';

const InfoBox = ({text, link, btnText}) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'> 
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain"/>
          </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hey! I'm<span className="font-semibold mx-2 text-white">Arya</span> 👋
            <br />
            <span className="text-sm lg:text-xl">A Computer Science student at Rutgers University</span>
            <br />
            <span className="text-xs text-white">Hold and drag the island!</span>
        </h1>
    ),
    2: (
        <InfoBox 
            text = "Over the past few years, I've acquired numerous new skills..."
            link = "/about"
            btnText="About Me"
        />
    ),
    3: (
        <InfoBox 
            text = "Brought forth a multitude of creative projects..."
            link = "/projects"
            btnText="Visit My Portfolio"
        />
    ),
    4: (
        <InfoBox 
            text = "Looking for a Software Engineer? I'm just a few keystrokes away..."
            link = "/contact"
            btnText="Let's Connect!"
        />
    )
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo