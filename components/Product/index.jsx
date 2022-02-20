import ProductCard from './ProductCard';
import styled from 'styled-components';

const Container = styled.div`
  margin-block: 50px;
  display: grid;
  gap: 20px;
  overflow: hidden;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
    margin-block: 100px;
  }
`;
function Product({ products }) {
  return (
    <Container>
      {products.map((product, idx) => (
        <ProductCard products={product} key={idx} />
      ))}
    </Container>
  );
}

export default Product;
