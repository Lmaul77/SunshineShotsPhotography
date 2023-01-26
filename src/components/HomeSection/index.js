import React, {useState} from 'react'
import Video from '../../video/video.mp4'
import { Button } from '../ButtonStyle'
import { HomeContainer, HomeBg, VideoBg, HomeContent, HomeH1, HomeP, HomeBtnWrapper, ArrowForward, ArrowRight } from './HomeStyle'

const HomeSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HomeContainer id='home'>
        <HomeBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HomeBg>
        <HomeContent>
            <HomeH1>SunShineShots Photography</HomeH1>
            <HomeP>
                Oklahoma City, OK
            </HomeP>
            <HomeBtnWrapper>
                <Button to='contact' onMouseEnter={onHover} onMouseLeave={onHover}
                primary='true'
                dark='true'>
                    Contact Today! {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HomeBtnWrapper>
        </HomeContent>
    </HomeContainer>
  )
}

export default HomeSection