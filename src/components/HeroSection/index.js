import React, { useState } from 'react'
import { Button } from '../ButtonElements'

import Video from '../../videos/SpaceFlightLoop.mp4'
import Image from '../../images/picture.png'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  Img
} from './HeroElements'

function HeroSection () {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  };
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <img src={Image} alt='logo' />
        {/* <HeroH1>Bronson Perez</HeroH1>
        <HeroP>
          Sign up for a new account today and receive $250 in credit towards
          your next payment.
        </HeroP> */}
        <HeroBtnWrapper>
          {/* <Button
            to='signup'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            primary='true'
            dark='true'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button> */}
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
