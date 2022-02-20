import Brands from '@components/Brands/Brands';
import Categories from '../Categories/Categories';
import styled from 'styled-components';
import Carsouls from '../Slides/Carsouls';

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-height: calc(100vh - 140px);
  width: 100%;
  grid-gap: 20px;
  overflow: hidden;
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(12, 1fr);
  }
`;

const CategoryWrapper = styled.div`
  scroll-snap-type: X mandatory;
  overflow: hidden;
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-column: 1 / span 3;
  }
`;
const SliderWrapper = styled.div`
  order: -1;
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-column: 4 / span 9;
    order: 1;
  }
`;
function Hero({ dataCategories }) {
  return (
    <HeroContainer>
      <CategoryWrapper>
        <Categories dataCategories={dataCategories} />
      </CategoryWrapper>
      <SliderWrapper>
        <Carsouls />
      </SliderWrapper>
    </HeroContainer>
  );
}

export default Hero;
