import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Category = ({ image, category }) => {
  return (
    <Link to={`/category/${category}`}>
      <CategoryListWrapper className="flex flex-column bg-alice-blue">
        <div className="category-item-img">
          <img src={image} />
        </div>
        <div className="category-item-name">
          <h6>{category}</h6>
        </div>
      </CategoryListWrapper>
      <br />
      <br />
      <br />
      <br />
    </Link>
  );
};
const CategoryListWrapper = styled.div`
  padding: 20px;

  border: 1px solid transparent;
  transition: var(--transition);
  .category-item-img {
    img {
      max-width: 120px;
    }
  }
  .category-item-name {
    margin-top: 25px;
    h6 {
      font-size: 15px;
    }
  }
  &:hover {
    border: 1px solid var(--clr-purple);
  }
`;
export default Category;
