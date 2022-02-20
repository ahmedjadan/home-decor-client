import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  background-color: ${({ theme }) => theme.colors.gray50};
  border-radius: 7px;
  cursor: pointer;
  min-width: 250px;
  opacity: 1;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray100};
  }
`;
const CardLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  & img {
    border-radius: 16px;
  }
`;
const CardRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;
const Title = styled.p`
  text-align: left;
  align-items: flex-start;
  margin-left: 20px;
`;
const Quantity = styled.p`
  height: 25px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.slate200};
`;

function CategoryCard({ image, title, quantity }) {
  return (
    <Container>
      <CardLeft>
        <Image src={image} width={67} height={67} alt={title} />
        <Title> {title} </Title>
      </CardLeft>
      <CardRight>
        <Quantity>{quantity}</Quantity>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          style={{ color: '#64748b', width: '20px' }}
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </CardRight>
    </Container>
  );
}

export default CategoryCard;
