
import {StyledCard} from "../style/cardWrapper";
import styled, { css } from "styled-components";

const Card = ({
  children,
  isFlex,
  flexStyles,
  justifyContent,
  alignItems,
  flexDirection,
  background,
  color,
  width,
  minWidth,
  height,
  minHeight,
  padding,
  margin,
  border,
  borderRadius
}) => {
  return (
    <StyledCard
      isFlex={isFlex}
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      background={background}
      color={color}
      width={width}
      minWidth={minWidth}
      height={height}
      minHeight={minHeight}
      padding={padding}
      margin={margin}
      border={border}
      borderRadius={borderRadius}
      flexStyles={flexStyles}
    >
      {children}
    </StyledCard>
  );
};

export default Card;
