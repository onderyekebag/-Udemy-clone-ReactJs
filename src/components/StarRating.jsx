import React from "react";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
import styled from "styled-components";
const StarRating = ({ rating_star }) => {
  const stars = Array.from({ length: 5 }, (_, idx) => {
    const val = idx + 0.5;
    return (
      <Star key={idx}>
        {rating_star >= idx + 1 ? (
          <BsStarFill />
        ) : rating_star >= val ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </Star>
    );
  });
  return <div className="flex">{stars}</div>;
};
const Star = styled.div`
  color: #e59819;
  margin-right: 2px;
  font-size: 15px;
  margin-bottom: -5px !important;
`;
export default StarRating;
