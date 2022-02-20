import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.gray50};
`;
const Card = styled.div`
  padding: 10px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;

  & span {
    position: unset !important;
  }
  .productImage {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: 100% !important;
    /* height: unset !important; */
  }
`;

// .imageContainer > div {
//   position: unset !important;
// }

const CardImage = styled.div``;
const Title = styled.h5`
  color: $colorprimary;
`;
const Price = styled.span``;

export default function ProductCard({
  products: { name, img, description, price },
}) {
  return (
    <Container>
      <Card>
        <ImageWrapper>
          <Image
            src={img}
            alt={name}
            layout="fill"
            className="productImage"
            objectFit="cover"
            objectPosition="center center"
          />
        </ImageWrapper>
        <Title> {name} </Title>
        <Price> ${price}</Price>
      </Card>
    </Container>
  );
}
