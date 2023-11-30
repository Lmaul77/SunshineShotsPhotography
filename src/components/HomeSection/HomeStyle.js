import styled from "styled-components";
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const HomeContainer = styled.div`
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    @media screen and (max-width: 768px) {
         height: 375px;
    }
`

export const HomeBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const FlexContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    max-height: 24rem; /* max-h-96 */
    @media (min-width: 1024px) { /* lg: breakpoint */
        max-height: none;
    }
`;

export const RelativeContainer = styled.div`
    position: relative;
    overflow: hidden;
    @media (min-width: 1024px) { /* lg: breakpoint */
        left: -5rem; /* lg:-left-20 */
    }
`;

export const StyledImage = styled.img`
    max-height: 100vh; /* max-h-screen */
    @media screen and (max-width: 768px) {
        width: 100%;
        z-index: 2; /* Lower z-index to ensure it's below HomeContent */
    }
`;

export const HomeContent = styled.div`
    z-index: 3;
    padding: 8px 24px;
    display: flex;
    margin-right: 500px;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 768px) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        box-sizing: border-box; /* To include padding in width */
    }
`;

export const HomeH1 = styled.div`
    color: #feb6b7;
    font-family: Playfair Display;
    font-size: 108px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const HomeP = styled.p`
    margin-top: 24px;
    color: #000000;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        display: none;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const HomeBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 768px) {
         display: none;
    }
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`