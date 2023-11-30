import React, {useState} from 'react'
import { Button } from '../ButtonStyle'
import SSSLarissa from '../../images/SSSLarissa.jpeg'
import { HomeContainer, HomeBg, FlexContainer, RelativeContainer, StyledImage, HomeContent, HomeH1, HomeP, HomeBtnWrapper, ArrowForward, ArrowRight } from './HomeStyle'

const HomeSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HomeContainer>
        <HomeBg>
        <FlexContainer>
            <RelativeContainer>
                <StyledImage src={SSSLarissa} alt='' />
            </RelativeContainer>
        </FlexContainer>
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