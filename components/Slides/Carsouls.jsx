import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import { slidedata } from './slidedata';
import Image from 'next/image';

const InfoWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SlideWrapper = styled.div`
  position: relative !important;
`;

const MyCarousel = styled(Carousel)`
  position: relative !important;
  .dot.selected {
    background-color: var(--color-primary);
    border-radius: 12px !important;
    width: 20px;
    transition: all 0.5s ease-in-out;
  }
`;
function Carsouls() {
  return (
    <>
      <MyCarousel
        showThumbs={false}
        showStatus={false}
        interval={3000}
        dynamicHeight
        animationHandler="fade"
        autoPlay
        transitionTime={800} //ms
        useKeyboardArrows
      >
        {slidedata.map((slide, idx) => (
          <SlideWrapper key={idx}>
            <img src={slide.image} alt={slide.title} />
            <InfoWrapper>
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
            </InfoWrapper>
          </SlideWrapper>
        ))}
      </MyCarousel>
    </>
  );
}

export default Carsouls;
