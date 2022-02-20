import CategoryCard from '@components/Categories/CategoryCard';
import styled from 'styled-components';
const CategoryContainer = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  scroll-snap-align: start;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 1024px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
  }
`;

function Categories({ dataCategories }) {
  return (
    <CategoryContainer>
      {dataCategories?.map((category, idx) => (
        <CategoryCard
          key={idx}
          image={category.image}
          title={category.title}
          quantity={category.quantity}
        />
      ))}
    </CategoryContainer>
  );
}

export default Categories;
